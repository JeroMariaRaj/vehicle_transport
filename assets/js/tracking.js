
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('tracking-form');
        if(form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const id = document.getElementById('tracking-id').value;
                const shipments = JSON.parse(localStorage.getItem('autohaul_shipments') || '[]');
                const found = shipments.find(s => s.id === id);
                if(found) {
                    document.getElementById('tracking-result').classList.remove('d-none');
                    document.getElementById('tracking-error').classList.add('d-none');
                    document.getElementById('trk-id').innerText = found.id;
                    document.getElementById('trk-status').innerText = found.status;
                } else {
                    document.getElementById('tracking-result').classList.add('d-none');
                    document.getElementById('tracking-error').classList.remove('d-none');
                }
            });
        }
    });
    