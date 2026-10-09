
    document.addEventListener('DOMContentLoaded', () => {
        const shipments = JSON.parse(localStorage.getItem('autohaul_shipments') || '[]');
        
        // Populate Customer Active Table
        const activeTable = document.querySelector('#dash-active-table tbody');
        if(activeTable) {
            shipments.forEach(s => {
                const badge = s.status === 'Delivered' ? 'bg-success' : (s.status === 'In Transit' ? 'bg-warning' : 'bg-info');
                activeTable.innerHTML += `
                    <tr>
                        <td class="fw-bold">${s.id}</td>
                        <td>${s.vehicle}</td>
                        <td class="small text-secondary">${s.route}</td>
                        <td><span class="badge ${badge}">${s.status}</span></td>
                        <td><a href="tracking.html" class="btn btn-sm btn-outline-primary">Track</a></td>
                    </tr>
                `;
            });
            document.getElementById('stat-total').innerText = shipments.length;
            document.getElementById('stat-active').innerText = shipments.filter(s => s.status !== 'Delivered').length;
            document.getElementById('stat-delivered').innerText = shipments.filter(s => s.status === 'Delivered').length;
        }
        
        // Populate Full Shipments Table
        const fullTable = document.querySelector('#shipments-table-body');
        if(fullTable) {
            const renderTable = (filterText = '') => {
                fullTable.innerHTML = '';
                const filtered = shipments.filter(s => {
                    const matchesText = s.id.toLowerCase().includes(filterText.toLowerCase()) || 
                                        s.vehicle.toLowerCase().includes(filterText.toLowerCase());
                    return matchesText;
                });
                
                if (filtered.length === 0) {
                    fullTable.innerHTML = '<tr><td colspan="6" class="text-center text-secondary py-4">No shipments found.</td></tr>';
                    return;
                }

                filtered.forEach(s => {
                    const badge = s.status === 'Delivered' ? 'bg-success' : (s.status === 'In Transit' ? 'bg-warning' : 'bg-info');
                    fullTable.innerHTML += `
                        <tr>
                            <td class="fw-bold text-navy">${s.id}</td>
                            <td class="fw-semibold">${s.vehicle}</td>
                            <td class="small text-secondary">${s.route}</td>
                            <td>${s.type}</td>
                            <td><span class="badge ${badge}">${s.status}</span></td>
                            <td>
                                <a href="tracking.html" class="btn btn-sm btn-primary">Track</a>
                            </td>
                        </tr>
                    `;
                });
            };
            
            renderTable();
            
            const searchInput = document.getElementById('shipment-search');
            const searchBtn = document.getElementById('shipment-search-btn');
            
            if (searchInput && searchBtn) {
                searchBtn.addEventListener('click', () => {
                    renderTable(searchInput.value);
                });
                searchInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        renderTable(searchInput.value);
                    }
                });
            }
        }

        // Populate Admin Recent Orders
        const adminTable = document.querySelector('#admin-recent-orders');
        if(adminTable) {
            shipments.forEach(s => {
                const badge = s.status === 'Delivered' ? 'bg-success' : (s.status === 'In Transit' ? 'bg-warning' : 'bg-info');
                adminTable.innerHTML += `
                    <tr>
                        <td class="fw-bold">${s.id}</td>
                        <td class="fw-semibold">${s.vehicle}</td>
                        <td class="small text-secondary">${s.route}</td>
                        <td><span class="badge ${badge}">${s.status}</span></td>
                        <td><a href="#" class="btn btn-sm btn-outline-primary">Manage</a></td>
                    </tr>
                `;
            });
        }
    
        // Booking Form Validation
        const bookingForm = document.getElementById('bookingForm');
        if (bookingForm) {
            bookingForm.addEventListener('submit', (e) => {
                e.preventDefault();
                let isValid = true;
                const inputs = bookingForm.querySelectorAll('input[required]');
                
                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        isValid = false;
                        input.classList.add('is-invalid');
                    } else {
                        input.classList.remove('is-invalid');
                    }
                });

                if (isValid) {
                    const bookingModal = new bootstrap.Modal(document.getElementById('bookingSuccessModal'));
                    bookingModal.show();
                    bookingForm.reset();
                }
            });
            
            bookingForm.querySelectorAll('input').forEach(input => {
                input.addEventListener('input', () => {
                    if (input.value.trim()) {
                        input.classList.remove('is-invalid');
                    }
                });
            });
        }
        // Payment Page: Add Card Validation
        const addCardForm = document.getElementById('addCardForm');
        if (addCardForm) {
            addCardForm.addEventListener('submit', function(e) {
                e.preventDefault();
                if (this.checkValidity()) {
                    // Hide current modal
                    const addModalEl = document.getElementById('addPaymentModal');
                    if (addModalEl) {
                        const addModal = bootstrap.Modal.getInstance(addModalEl);
                        if (addModal) addModal.hide();
                    }
                    // Show success modal
                    const successModal = new bootstrap.Modal(document.getElementById('cardSavedModal'));
                    successModal.show();
                    // Reset the form classes
                    this.classList.remove('was-validated');
                    this.reset();
                } else {
                    e.stopPropagation();
                    this.classList.add('was-validated');
                }
            });
        }

    });
    