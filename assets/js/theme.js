
    document.addEventListener('DOMContentLoaded', () => {
        const updateToggles = () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            
            document.querySelectorAll('#theme-toggle i, [title="Toggle Theme"] i').forEach(icon => {
                icon.className = isDark ? 'bi bi-sun' : 'bi bi-moon-stars';
            });
            
            document.querySelectorAll('#rtl-toggle span, [title="Toggle RTL"] span').forEach(span => {
                span.textContent = isRTL ? 'LTR' : 'RTL';
            });
        };

        const themeToggles = document.querySelectorAll('#theme-toggle, [title="Toggle Theme"]');
        themeToggles.forEach(toggle => {
            toggle.removeAttribute('onclick'); // Remove inline handlers
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                const newTheme = isDark ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                updateToggles();
            });
        });
        
        const rtlToggles = document.querySelectorAll('#rtl-toggle, [title="Toggle RTL"]');
        rtlToggles.forEach(toggle => {
            toggle.removeAttribute('onclick');
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
                const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
                document.documentElement.setAttribute('dir', newDir);
                localStorage.setItem('dir', newDir);
                updateToggles();
            });
        });
        
        updateToggles();

        // Messages Page: Send Chat
        const chatSendBtn = document.getElementById('chatSendBtn');
        const chatInput = document.getElementById('chatInput');
        const chatHistory = document.getElementById('chatHistory');

        if (chatSendBtn && chatInput && chatHistory) {
            const sendMessage = () => {
                const text = chatInput.value.trim();
                if (text) {
                    const msgHtml = `
                        <!-- Sent -->
                        <div class="d-flex flex-column align-items-end mb-3">
                            <div class="bg-primary text-white rounded-4 p-3 shadow-sm" style="max-width: 75%;">
                                ${text}
                            </div>
                        </div>
                    `;
                    chatHistory.insertAdjacentHTML('beforeend', msgHtml);
                    chatInput.value = '';
                    chatHistory.scrollTop = chatHistory.scrollHeight;
                }
            };
            
            chatSendBtn.addEventListener('click', sendMessage);
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    sendMessage();
                }
            });
        }

        // Profile Page: Save Changes Modal
        const profileForm = document.getElementById('profileForm');
        if (profileForm) {
            profileForm.addEventListener('submit', (e) => {
                e.preventDefault();
                if (profileForm.checkValidity()) {
                    const savedModal = new bootstrap.Modal(document.getElementById('profileSavedModal'));
                    savedModal.show();
                } else {
                    profileForm.reportValidity();
                }
            });
        }

        // Settings Page: Update Password
        const updatePasswordForm = document.getElementById('updatePasswordForm');
        if (updatePasswordForm) {
            const newPassword = document.getElementById('newPassword');
            const confirmPassword = document.getElementById('confirmPassword');
            
            const validatePasswords = () => {
                if (newPassword.value !== confirmPassword.value) {
                    confirmPassword.setCustomValidity("Passwords do not match");
                } else {
                    confirmPassword.setCustomValidity("");
                }
            };

            newPassword.addEventListener('input', validatePasswords);
            confirmPassword.addEventListener('input', validatePasswords);

            updatePasswordForm.addEventListener('submit', (e) => {
                e.preventDefault();
                validatePasswords();
                
                if (updatePasswordForm.checkValidity()) {
                    // Close the input modal
                    const updateModalEl = document.getElementById('updatePasswordModal');
                    const updateModal = bootstrap.Modal.getInstance(updateModalEl);
                    if (updateModal) {
                        updateModal.hide();
                    }
                    
                    // Show the success modal
                    setTimeout(() => {
                        const savedModal = new bootstrap.Modal(document.getElementById('passwordSavedModal'));
                        savedModal.show();
                        updatePasswordForm.reset();
                    }, 400); // Wait for fade out
                } else {
                    updatePasswordForm.reportValidity();
                }
            });
        }

        // Settings Page: Save Preferences & Alerts
        const savePreferencesBtn = document.getElementById('savePreferencesBtn');
        const saveAlertsBtn = document.getElementById('saveAlertsBtn');
        
        const showSettingsSavedModal = (e) => {
            e.preventDefault();
            const savedModal = new bootstrap.Modal(document.getElementById('settingsSavedModal'));
            savedModal.show();
        };
        
        if (savePreferencesBtn) {
            savePreferencesBtn.addEventListener('click', showSettingsSavedModal);
        }
        if (saveAlertsBtn) {
            saveAlertsBtn.addEventListener('click', showSettingsSavedModal);
        }
    });
    