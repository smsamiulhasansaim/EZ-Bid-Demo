            document.addEventListener('DOMContentLoaded', function() {
            // Navigation between steps
            const formSteps = document.querySelectorAll('.form-step');
            const progressFill = document.querySelector('.progress-fill');
            const stepCounter = document.querySelector('.step-counter');
            const progressSteps = document.querySelectorAll('.progress-steps span');
            const sidebarItems = document.querySelectorAll('.form-section-item');
            const nextBtn = document.querySelector('.btn-next');
            const prevBtn = document.querySelector('.btn-prev');
            
            let currentStep = 1;
            const totalSteps = 15;
            
            // Update progress bar
            function updateProgress() {
                const progressPercentage = (currentStep / totalSteps) * 100;
                progressFill.style.width = `${progressPercentage}%`;
                
                // Update step counter
                stepCounter.textContent = `Step ${currentStep} of ${totalSteps}: ${getStepTitle(currentStep)}`;
                
                // Update progress steps
                progressSteps.forEach((step, index) => {
                    if (index + 1 <= currentStep) {
                        step.classList.add('active');
                    } else {
                        step.classList.remove('active');
                    }
                });
                
                // Update sidebar items
                sidebarItems.forEach((item, index) => {
                    if (index + 1 === currentStep) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }
            
            // Get step title
            function getStepTitle(step) {
                const titles = [
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
                return titles[step - 1] || 'Unknown Step';
            }
            
            // Show current step
            function showStep(step) {
                formSteps.forEach(formStep => {
                    formStep.classList.remove('active');
                });
                
                const currentFormStep = document.getElementById(`step-${step}`);
                if (currentFormStep) {
                    currentFormStep.classList.add('active');
                    currentFormStep.classList.add('animate-slide-in');
                    setTimeout(() => {
                        currentFormStep.classList.remove('animate-slide-in');
                    }, 500);
                }
                
                // Update button states
                prevBtn.disabled = step === 1;
                if (step === totalSteps) {
                    nextBtn.style.display = 'none';
                } else {
                    nextBtn.style.display = 'flex';
                }
                
                updateProgress();
            }
            
            // Next button click
            nextBtn.addEventListener('click', () => {
                if (currentStep < totalSteps) {
                    currentStep++;
                    showStep(currentStep);
                }
            });
            
            // Previous button click
            prevBtn.addEventListener('click', () => {
                if (currentStep > 1) {
                    currentStep--;
                    showStep(currentStep);
                }
            });
            
            // Sidebar item click
            sidebarItems.forEach(item => {
                item.addEventListener('click', () => {
                    const step = parseInt(item.getAttribute('data-step'));
                    currentStep = step;
                    showStep(currentStep);
                });
            });
            
            // Initialize the form
            showStep(1);
            
            // Add hover effects to elements
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.classList.add('hover-lift');
                });
                
                card.addEventListener('mouseleave', () => {
                    card.classList.remove('hover-lift');
                });
            });
            
            // Auto-save animation
            const autoSave = document.querySelector('.auto-save');
            setInterval(() => {
                autoSave.style.opacity = '0.8';
                setTimeout(() => {
                    autoSave.style.opacity = '1';
                }, 300);
            }, 5000);
        });
