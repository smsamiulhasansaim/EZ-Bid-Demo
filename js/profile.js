            document.addEventListener('DOMContentLoaded', function() {
            // Navigation between steps
            const formSteps = document.querySelectorAll('.form-step');
            const stepItems = document.querySelectorAll('.form-section-item');
            const prevBtn = document.querySelector('.btn-prev');
            const nextBtn = document.querySelector('.btn-next');
            const progressFill = document.querySelector('.progress-fill');
            const stepCounter = document.querySelector('.step-counter');
            let currentStep = 1;

            // Function to update the progress bar
            function updateProgress() {
                const progressPercentage = (currentStep / 15) * 100;
                progressFill.style.width = `${progressPercentage}%`;
                
                // Update step counter text
                const stepTitles = [
                    'Basic Information',
                    'Legal & Registration',
                    'Address Details',
                    'Contact Details',
                    'Leadership',
                    'Key Personnel',
                    'Experience & Expertise',
                    'Projects Portfolio',
                    'Clientele',
                    'Certifications',
                    'Financial Information',
                    'Technology & Tools',
                    'Quality & Safety',
                    'Company History',
                    'Review & Submit'
                ];
                
                stepCounter.textContent = `Step ${currentStep} of 15: ${stepTitles[currentStep - 1]}`;
                
                // Update active state in sidebar
                stepItems.forEach((item, index) => {
                    if (index + 1 === currentStep) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
                
                // Update progress steps
                const progressSteps = document.querySelectorAll('.progress-steps span');
                progressSteps.forEach((step, index) => {
                    if (index + 1 === currentStep) {
                        step.classList.add('active');
                    } else {
                        step.classList.remove('active');
                    }
                });
            }

            // Function to show a specific step
            function showStep(stepNumber) {
                formSteps.forEach(step => {
                    step.classList.remove('active');
                });
                document.getElementById(`step-${stepNumber}`).classList.add('active');
                
                // Update button states
                prevBtn.disabled = stepNumber === 1;
                
                if (stepNumber === 15) {
                    nextBtn.style.display = 'none';
                } else {
                    nextBtn.style.display = 'flex';
                }
                
                currentStep = stepNumber;
                updateProgress();
            }

            // Next button click event
            nextBtn.addEventListener('click', () => {
                if (currentStep < 15) {
                    showStep(currentStep + 1);
                }
            });

            // Previous button click event
            prevBtn.addEventListener('click', () => {
                if (currentStep > 1) {
                    showStep(currentStep - 1);
                }
            });

            // Sidebar item click event
            stepItems.forEach(item => {
                item.addEventListener('click', () => {
                    const stepNumber = parseInt(item.getAttribute('data-step'));
                    showStep(stepNumber);
                });
            });

            // Initialize the first step
            showStep(1);
        });
