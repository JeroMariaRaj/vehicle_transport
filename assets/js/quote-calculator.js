document.addEventListener('DOMContentLoaded', () => {
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const steps = document.querySelectorAll('.step-content');
    let currentStep = 0;
    
    function validateStep(stepIndex) {
        let isValid = true;
        const currentStepDiv = steps[stepIndex];
        const inputs = currentStepDiv.querySelectorAll('input, select');
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('is-invalid');
                isValid = false;
            } else {
                input.classList.remove('is-invalid');
            }
        });
        return isValid;
    }

    // Add event listeners to remove is-invalid on input typing
    document.querySelectorAll('#multi-step-quote input, #multi-step-quote select').forEach(input => {
        input.addEventListener('input', () => {
            input.classList.remove('is-invalid');
        });
    });
    
    nextBtns.forEach(btn => btn.addEventListener('click', () => {
        // Validate before moving to next step
        if (!validateStep(currentStep)) {
            return;
        }

        if(currentStep < steps.length - 1) {
            steps[currentStep].classList.add('d-none');
            steps[currentStep].classList.remove('active');
            currentStep++;
            steps[currentStep].classList.remove('d-none');
            steps[currentStep].classList.add('active');
            
            // Progress bar update
            let progress = document.getElementById('quote-progress');
            if (progress) {
                if (currentStep === 0) progress.style.width = '25%';
                if (currentStep === 1) progress.style.width = '60%';
                if (currentStep === 2) progress.style.width = '100%';
            }
            
            if(currentStep === 2) {
                // Calc logic
                document.getElementById('res-route').innerText = document.getElementById('q-pickup').value + ' -> ' + document.getElementById('q-delivery').value;
                document.getElementById('res-vehicle').innerText = document.getElementById('q-make').value + ' ' + document.getElementById('q-model').value;
                
                let typeSelect = document.getElementById('q-type');
                document.getElementById('res-type').innerText = typeSelect.options[typeSelect.selectedIndex].text;
                
                let base = 850;
                if(document.getElementById('q-type').value === 'enclosed') base += 400;
                document.getElementById('res-price').innerText = '$' + base;
            }
        }
    }));
    
    prevBtns.forEach(btn => btn.addEventListener('click', () => {
        if(currentStep > 0) {
            steps[currentStep].classList.add('d-none');
            steps[currentStep].classList.remove('active');
            currentStep--;
            steps[currentStep].classList.remove('d-none');
            steps[currentStep].classList.add('active');
            
            // Progress bar update
            let progress = document.getElementById('quote-progress');
            if (progress) {
                if (currentStep === 0) progress.style.width = '25%';
                if (currentStep === 1) progress.style.width = '60%';
                if (currentStep === 2) progress.style.width = '100%';
            }
        }
    }));
});
