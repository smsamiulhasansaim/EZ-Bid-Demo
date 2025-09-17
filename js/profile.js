    // Current step tracking
    let currentStep = 1;
    const totalSteps = 7;

    // Store form data
    const formData = {
        basic: {},
        legal: {},
        address: {},
        team: {},
        experience: {},
        certifications: {},
        review: {}
    };

    // DOM elements
    const formSteps = document.querySelectorAll('.form-step');
    const formSectionItems = document.querySelectorAll('.form-section-item');
    const progressFill = document.getElementById('progressFill');
    const stepCounter = document.querySelector('.step-counter');
    const progressSteps = document.querySelectorAll('.progress-steps span');
    const prevBtn = document.querySelector('.btn-prev');
    const nextBtn = document.querySelector('.btn-next');
    const saveBtn = document.getElementById('saveBtn');
    const autoSaveStatus = document.getElementById('autoSaveStatus');
    const supportBtn = document.getElementById('supportBtn');
    const toastContainer = document.getElementById('toastContainer');
    const languageButtons = document.querySelectorAll('.language-btn');

    // Initialize the application
    function initApp() {
        updateStep(1);
        initializeFileUploads();
        initializeEventListeners();
        loadSavedData();
        initializeLanguageToggle();
        
        // Set up auto-save indicator
        setInterval(() => {
            autoSaveStatus.innerHTML = '<i class="fas fa-save"></i> <span>Auto-save enabled</span>';
            setTimeout(() => {
                autoSaveStatus.innerHTML = '<i class="fas fa-save"></i> <span>All changes saved</span>';
            }, 2000);
        }, 30000);
    }

    // Initialize file upload previews for ALL sections
    function initializeFileUploads() {
        // Logo upload
        document.getElementById('logoUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'logoFileInfo', 'logoPreview', 'logoUploadStatus', 'companyLogo');
        });

        // Trade license upload
        document.getElementById('tradeLicenseUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'tradeLicenseFileInfo', 'tradeLicensePreview', 'tradeLicenseUploadStatus', 'tradeLicense');
        });

        // BIN certificate upload
        document.getElementById('binCertificateUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'binCertificateFileInfo', 'binCertificatePreview', 'binCertificateUploadStatus', 'binCertificate');
        });

        // TIN certificate upload
        document.getElementById('tinCertificateUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'tinCertificateFileInfo', 'tinCertificatePreview', 'tinCertificateUploadStatus', 'tinCertificate');
        });

        // Leader CV upload
        document.getElementById('leaderCvUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'leaderCvFileInfo', 'leaderCvPreview', 'leaderCvUploadStatus', 'leaderCv');
        });

        // PD CV upload
        document.getElementById('pdCvUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'pdCvFileInfo', 'pdCvPreview', 'pdCvUploadStatus', 'pdCv');
        });

        // HOD CV upload
        document.getElementById('hodCvUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'hodCvFileInfo', 'hodCvPreview', 'hodCvUploadStatus', 'hodCv');
        });

        // Expertise document upload
        document.getElementById('expertiseDocUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'expertiseDocFileInfo', 'expertiseDocPreview', 'expertiseDocUploadStatus', 'expertiseDoc');
        });

        // Experience document upload
        document.getElementById('experienceDocUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'experienceDocFileInfo', 'experienceDocPreview', 'experienceDocUploadStatus', 'experienceDoc');
        });

        // Staff list upload
        document.getElementById('staffListUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'staffListFileInfo', 'staffListPreview', 'staffListUploadStatus', 'staffList');
        });

        // Equipment list upload
        document.getElementById('equipmentListUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'equipmentListFileInfo', 'equipmentListPreview', 'equipmentListUploadStatus', 'equipmentList');
        });

        // Financial documents upload
        document.getElementById('financialDocsUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'financialDocsFileInfo', 'financialDocsPreview', 'financialDocsUploadStatus', 'financialDocs');
        });

        // Project portfolio upload
        document.getElementById('projectPortfolioUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'projectPortfolioFileInfo', 'projectPortfolioPreview', 'projectPortfolioUploadStatus', 'projectPortfolio');
        });

        // Client references upload
        document.getElementById('clientReferencesUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'clientReferencesFileInfo', 'clientReferencesPreview', 'clientReferencesUploadStatus', 'clientReferences');
        });

        // ISO certificate upload
        document.getElementById('isoCertificateUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'isoCertificateFileInfo', 'isoCertificatePreview', 'isoCertificateUploadStatus', 'isoCertificate');
        });

        // Safety policies upload
        document.getElementById('safetyPoliciesUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'safetyPoliciesFileInfo', 'safetyPoliciesPreview', 'safetyPoliciesUploadStatus', 'safetyPolicies');
        });

        // QA documents upload
        document.getElementById('qaDocumentsUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'qaDocumentsFileInfo', 'qaDocumentsPreview', 'qaDocumentsUploadStatus', 'qaDocuments');
        });

        // Award certificate upload
        document.getElementById('awardCertificateUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'awardCertificateFileInfo', 'awardCertificatePreview', 'awardCertificateUploadStatus', 'awardCertificate');
        });

        // Bank solvency upload
        document.getElementById('bankSolvencyUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'bankSolvencyFileInfo', 'bankSolvencyPreview', 'bankSolvencyUploadStatus', 'bankSolvency');
        });

        // Financial statements upload
        document.getElementById('financialStatementsUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'financialStatementsFileInfo', 'financialStatementsPreview', 'financialStatementsUploadStatus', 'financialStatements');
        });

        // Tax returns upload
        document.getElementById('taxReturnsUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'taxReturnsFileInfo', 'taxReturnsPreview', 'taxReturnsUploadStatus', 'taxReturns');
        });

        // IT infrastructure upload
        document.getElementById('itInfrastructureUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'itInfrastructureFileInfo', 'itInfrastructurePreview', 'itInfrastructureUploadStatus', 'itInfrastructure');
        });

        // Quality manual upload
        document.getElementById('qualityManualUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'qualityManualFileInfo', 'qualityManualPreview', 'qualityManualUploadStatus', 'qualityManual');
        });

        // Quality procedures upload
        document.getElementById('qualityProceduresUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'qualityProceduresFileInfo', 'qualityProceduresPreview', 'qualityProceduresUploadStatus', 'qualityProcedures');
        });

        // Safety manual upload
        document.getElementById('safetyManualUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'safetyManualFileInfo', 'safetyManualPreview', 'safetyManualUploadStatus', 'safetyManual');
        });

        // Safety procedures upload
        document.getElementById('safetyProceduresUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'safetyProceduresFileInfo', 'safetyProceduresPreview', 'safetyProceduresUploadStatus', 'safetyProcedures');
        });

        // Safety records upload
        document.getElementById('safetyRecordsUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'safetyRecordsFileInfo', 'safetyRecordsPreview', 'safetyRecordsUploadStatus', 'safetyRecords');
        });

        // Company brochure upload
        document.getElementById('companyBrochureUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'companyBrochureFileInfo', 'companyBrochurePreview', 'companyBrochureUploadStatus', 'companyBrochure');
        });

        // Company profile upload
        document.getElementById('companyProfileUpload').addEventListener('change', function(e) {
            handleFileUpload(e, 'companyProfileFileInfo', 'companyProfilePreview', 'companyProfileUploadStatus', 'companyProfile');
        });
    }

    // Initialize event listeners
    function initializeEventListeners() {
        // Navigation buttons
        prevBtn.addEventListener('click', goToPreviousStep);
        nextBtn.addEventListener('click', goToNextStep);
        saveBtn.addEventListener('click', saveFormData);
        
        // Support button
        supportBtn.addEventListener('click', showSupportModal);
        
        // Sidebar navigation
        formSectionItems.forEach(item => {
            item.addEventListener('click', () => {
                const step = parseInt(item.dataset.step);
                if (validateCurrentStep()) {
                    updateStep(step);
                }
            });
        });
        
        // Input validation on blur for ALL sections
        const requiredInputs = document.querySelectorAll('input[required], select[required], textarea[required]');
        requiredInputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
        });
        
        // Terms agreement validation
        document.getElementById('termsAgreement').addEventListener('change', function() {
            toggleError(this, 'termsAgreementError', !this.checked);
        });

        // Add event listeners for "Add Another Branch" buttons
        const addBranchButtons = document.querySelectorAll('.upload-btn');
        addBranchButtons.forEach(button => {
            if (button.textContent.includes('Add Another Branch')) {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    showToast('Feature to add another branch would be implemented here', 'info');
                });
            }
        });

        // Add event listeners for "Add Another Project" buttons
        const addProjectButtons = document.querySelectorAll('.contact-btn');
        addProjectButtons.forEach(button => {
            if (button.textContent.includes('Add Another Project')) {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    showToast('Feature to add another project would be implemented here', 'info');
                });
            }
        });

        // Add event listeners for "Add Personnel" buttons
        const addPersonnelButtons = document.querySelectorAll('.contact-btn');
        addPersonnelButtons.forEach(button => {
            if (button.textContent.includes('Add Personnel')) {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    showToast('Feature to add personnel would be implemented here', 'info');
                });
            }
        });

        // Add event listeners for "Add Certification" buttons
        const addCertificationButtons = document.querySelectorAll('.contact-btn');
        addCertificationButtons.forEach(button => {
            if (button.textContent.includes('Add Certification')) {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    showToast('Feature to add certification would be implemented here', 'info');
                });
            }
        });

        // Add event listeners for "Add Another Milestone" buttons
        const addMilestoneButtons = document.querySelectorAll('.upload-btn');
        addMilestoneButtons.forEach(button => {
            if (button.textContent.includes('Add Another Milestone')) {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    showToast('Feature to add another milestone would be implemented here', 'info');
                });
            }
        });

        // Add event listeners for edit icons in review section
        const editIcons = document.querySelectorAll('.edit-icon');
        editIcons.forEach(icon => {
            icon.addEventListener('click', function() {
                const section = this.dataset.section;
                const field = this.dataset.field;
                
                // Navigate to the appropriate section
                let stepToGo = 1;
                
                switch(section) {
                    case 'basic':
                        stepToGo = 1;
                        break;
                    case 'legal':
                        stepToGo = 2;
                        break;
                    case 'address':
                        stepToGo = 3;
                        break;
                    case 'team':
                        stepToGo = 4;
                        break;
                    case 'experience':
                        stepToGo = 5;
                        break;
                    case 'certifications':
                        stepToGo = 6;
                        break;
                    default:
                        stepToGo = 1;
                }
                
                updateStep(stepToGo);
                showToast(`Please edit the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field`, 'info');
            });
        });
    }

    // Initialize language toggle
    function initializeLanguageToggle() {
        languageButtons.forEach(button => {
            button.addEventListener('click', function() {
                languageButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                // In a real application, you would change the language here
                showToast('Language changed to ' + (this.dataset.lang === 'en' ? 'English' : 'Bengali'), 'success');
            });
        });
    }

    // Handle file upload and preview
    function handleFileUpload(event, fileInfoId, previewId, statusId, fieldName) {
        const file = event.target.files[0];
        const fileInfo = document.getElementById(fileInfoId);
        const preview = document.getElementById(previewId);
        const status = document.getElementById(statusId);
        
        if (file) {
            // Validate file type and size
            const validTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            const maxSize = 2 * 1024 * 1024; // 2MB
            
            if (!validTypes.includes(file.type)) {
                showToast('Please select a JPG, PNG, DOC, DOCX, or PDF file', 'error');
                event.target.value = '';
                return;
            }
            
            if (file.size > maxSize) {
                showToast('File size must be less than 2MB', 'error');
                event.target.value = '';
                return;
            }
            
            fileInfo.textContent = file.name;
            status.innerHTML = `<span class="status-success"><i class="fas fa-check-circle"></i> Upload successful</span>`;
            
            // Save file info to form data
            const section = getSectionFromStep(currentStep);
            formData[section][fieldName] = file.name;
            
            updateSectionProgress();
            saveToLocalStorage();
            
            // If it's an image, show preview
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    preview.innerHTML = `
                        <img src="${e.target.result}" alt="Preview">
                        <div class="remove-file" onclick="removeFile('${event.target.id}', '${fileInfoId}', '${previewId}', '${statusId}', '${fieldName}')">
                            <i class="fas fa-times"></i>
                        </div>
                    `;
                };
                reader.readAsDataURL(file);
            } else {
                // For PDFs and documents, show a document icon
                const iconClass = file.type.includes('pdf') ? 'fa-file-pdf' : 'fa-file-word';
                const iconColor = file.type.includes('pdf') ? '#e74c3c' : '#2c3e50';
                
                preview.innerHTML = `
                    <div style="font-size: 3rem; color: ${iconColor};">
                        <i class="fas ${iconClass}"></i>
                    </div>
                    <div class="remove-file" onclick="removeFile('${event.target.id}', '${fileInfoId}', '${previewId}', '${statusId}', '${fieldName}')">
                        <i class="fas fa-times"></i>
                    </div>
                `;
            }
            
            // Clear any error
            const errorElement = document.getElementById(fieldName + 'Error');
            if (errorElement) {
                errorElement.style.display = 'none';
            }
        }
    }

    // Remove uploaded file
    function removeFile(inputId, fileInfoId, previewId, statusId, fieldName) {
        const input = document.getElementById(inputId);
        const fileInfo = document.getElementById(fileInfoId);
        const preview = document.getElementById(previewId);
        const status = document.getElementById(statusId);
        
        input.value = '';
        fileInfo.textContent = 'No file selected';
        preview.innerHTML = '';
        status.innerHTML = '';
        
        // Remove from form data
        const section = getSectionFromStep(currentStep);
        delete formData[section][fieldName];
        
        updateSectionProgress();
        saveToLocalStorage();
    }

    // Navigation functions
    function goToPreviousStep() {
        if (currentStep > 1) {
            updateStep(currentStep - 1);
        }
    }

    function goToNextStep() {
        if (validateCurrentStep()) {
            if (currentStep < totalSteps) {
                updateStep(currentStep + 1);
                
                // If moving to review step, update review content
                if (currentStep === totalSteps) {
                    updateReviewSection();
                }
            } else {
                submitForm();
            }
        }
    }

    function updateStep(step) {
        // Hide all steps
        formSteps.forEach(formStep => {
            formStep.classList.remove('active');
        });
        
        // Show current step
        document.getElementById(`step-${step}`).classList.add('active');
        
        // Update sidebar items
        formSectionItems.forEach(item => {
            item.classList.remove('active');
            if (parseInt(item.dataset.step) === step) {
                item.classList.add('active');
            }
        });
        
        // Update progress bar
        const progressPercentage = ((step - 1) / (totalSteps - 1)) * 100;
        progressFill.style.width = `${progressPercentage}%`;
        
        // Update step counter
        const stepTitles = [
            'Basic Information',
            'Legal & Registration',
            'Address & Contact',
            'Team & Leadership',
            'Experience & Projects',
            'Certifications & Quality',
            'Review & Submit'
        ];
        stepCounter.textContent = `Step ${step} of ${totalSteps}: ${stepTitles[step - 1]}`;
        
        // Update progress steps
        progressSteps.forEach((progressStep, index) => {
            if (index < step) {
                progressStep.classList.add('active');
            } else {
                progressStep.classList.remove('active');
            }
        });
        
        // Update navigation buttons
        if (step === 1) {
            prevBtn.style.visibility = 'hidden';
        } else {
            prevBtn.style.visibility = 'visible';
        }
        
        if (step === totalSteps) {
            nextBtn.innerHTML = `Submit <i class="fas fa-paper-plane"></i>`;
        } else {
            nextBtn.innerHTML = `Next <i class="fas fa-arrow-right"></i>`;
        }
        
        currentStep = step;
    }

    // Field validation
    function validateField(field) {
        let isValid = true;
        const errorId = field.id + 'Error';
        
        if (field.hasAttribute('required') && !field.value.trim()) {
            toggleError(field, errorId, true);
            isValid = false;
        } else if (field.type === 'email' && field.value) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(field.value)) {
                toggleError(field, errorId, true);
                isValid = false;
            } else {
                toggleError(field, errorId, false);
            }
        } else if (field.type === 'url' && field.value) {
            try {
                new URL(field.value);
                toggleError(field, errorId, false);
            } catch (e) {
                toggleError(field, errorId, true);
                isValid = false;
            }
        } else {
            toggleError(field, errorId, false);
        }
        
        return isValid;
    }

    function toggleError(field, errorId, showError) {
        const errorElement = document.getElementById(errorId);
        
        if (showError) {
            field.classList.add('input-error');
            if (errorElement) errorElement.style.display = 'block';
        } else {
            field.classList.remove('input-error');
            if (errorElement) errorElement.style.display = 'none';
        }
    }

    // Step validation - ALL SECTIONS
    function validateCurrentStep() {
        let isValid = true;
        const currentStepElement = document.getElementById(`step-${currentStep}`);
        const requiredFields = currentStepElement.querySelectorAll('input[required], select[required], textarea[required]');
        
        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        
        // Additional validation for file uploads in step 2
        if (currentStep === 2) {
            const requiredFiles = ['tradeLicense', 'binCertificate', 'tinCertificate'];
            requiredFiles.forEach(fileType => {
                const fileField = document.getElementById(`${fileType}Upload`);
                if (fileField && !fileField.value) {
                    const errorElement = document.getElementById(`${fileType}Error`);
                    if (errorElement) {
                        errorElement.style.display = 'block';
                        isValid = false;
                    }
                }
            });
        }
        
        // Additional validation for phone number in step 3
        if (currentStep === 3) {
            const phoneNumber = document.getElementById('phone-number');
            if (phoneNumber && phoneNumber.value) {
                const phonePattern = /^1\d{9}$/;
                if (!phonePattern.test(phoneNumber.value)) {
                    showToast('Phone number must be 11 digits starting with 1', 'error');
                    phoneNumber.classList.add('input-error');
                    isValid = false;
                }
            }
        }
        
        // Additional validation for email in step 3
        if (currentStep === 3) {
            const emailAddress = document.getElementById('email-address');
            if (emailAddress && emailAddress.value) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailAddress.value)) {
                    showToast('Please enter a valid email address', 'error');
                    emailAddress.classList.add('input-error');
                    isValid = false;
                }
            }
        }
        
        // Additional validation for website in step 3
        if (currentStep === 3) {
            const website = document.getElementById('website');
            if (website && website.value) {
                try {
                    new URL(website.value);
                } catch (e) {
                    showToast('Please enter a valid website URL', 'error');
                    website.classList.add('input-error');
                    isValid = false;
                }
            }
        }
        
        if (!isValid) {
            showToast('Please complete all required fields', 'error');
            // Scroll to first error
            const firstError = currentStepElement.querySelector('.input-error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
        
        return isValid;
    }

    // Save form data
    function saveFormData() {
        // Collect data from current step
        const currentStepElement = document.getElementById(`step-${currentStep}`);
        const inputs = currentStepElement.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            if (input.id) {
                const section = getSectionFromStep(currentStep);
                formData[section][input.id] = input.value;
            }
        });
        
        // Also collect checkbox values
        const checkboxes = currentStepElement.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            if (checkbox.id) {
                const section = getSectionFromStep(currentStep);
                formData[section][checkbox.id] = checkbox.checked;
            }
        });
        
        // Update section progress
        updateSectionProgress();
        
        // Save to localStorage
        saveToLocalStorage();
        
        showToast('Progress saved successfully', 'success');
    }

    function saveToLocalStorage() {
        localStorage.setItem('ezBdFormData', JSON.stringify(formData));
    }

    function loadSavedData() {
        const savedData = localStorage.getItem('ezBdFormData');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            Object.assign(formData, parsedData);
            
            // Populate fields with saved data
            for (const section in formData) {
                for (const field in formData[section]) {
                    const input = document.getElementById(field);
                    if (input) {
                        if (input.type === 'checkbox') {
                            input.checked = formData[section][field];
                        } else {
                            input.value = formData[section][field];
                        }
                    }
                }
            }
            
            // Update progress indicators
            updateSectionProgress();
            
            showToast('Previous progress loaded', 'success');
        }
    }

    function getSectionFromStep(step) {
        const sections = ['basic', 'legal', 'address', 'team', 'experience', 'certifications', 'review'];
        return sections[step - 1] || 'basic';
    }

    function updateSectionProgress() {
        formSectionItems.forEach(item => {
            const step = parseInt(item.dataset.step);
            const section = getSectionFromStep(step);
            const progressElement = item.querySelector('.section-status');
            
            if (formData[section] && Object.keys(formData[section]).length > 0) {
                // Simple progress calculation (in real app, would be more sophisticated)
                const progress = Object.keys(formData[section]).length * 5; // Reduced multiplier for more sections
                progressElement.textContent = `${Math.min(progress, 100)}%`;
                progressElement.className = 'section-status status-complete';
            } else {
                progressElement.textContent = '0%';
                progressElement.className = 'section-status status-incomplete';
            }
        });
    }

    // Update review section with data from ALL sections
    function updateReviewSection() {
        // Basic Information
        document.getElementById('review-companyName').textContent = formData.basic.companyName || 'Not provided';
        document.getElementById('review-dateOfEstablishment').textContent = formData.basic.dateOfEstablishment || 'Not provided';
        document.getElementById('review-businessType').textContent = formData.basic.businessType || 'Not provided';
        document.getElementById('review-industrySector').textContent = formData.basic.industrySector || 'Not provided';
        
        // Legal & Registration
        document.getElementById('review-tradeLicenseNumber').textContent = formData.legal.tradeLicenseNumber || 'Not provided';
        document.getElementById('review-binVatNumber').textContent = formData.legal.binVatNumber || 'Not provided';
        document.getElementById('review-tinNumber').textContent = formData.legal.tinNumber || 'Not provided';
        
        // Documents
        document.getElementById('review-companyLogo').textContent = formData.basic.companyLogo || 'Not provided';
        document.getElementById('review-tradeLicense').textContent = formData.legal.tradeLicense || 'Not provided';
        document.getElementById('review-binCertificate').textContent = formData.legal.binCertificate || 'Not provided';
        document.getElementById('review-tinCertificate').textContent = formData.legal.tinCertificate || 'Not provided';
        
        // Address Information
        document.getElementById('review-phone-number').textContent = formData.address['phone-number'] || 'Not provided';
        document.getElementById('review-email-address').textContent = formData.address['email-address'] || 'Not provided';
        
        // Team Information
        document.getElementById('review-leader-fullName').textContent = formData.team['leader-fullName'] || 'Not provided';
        document.getElementById('review-leader-designation').textContent = formData.team['leader-designation'] || 'Not provided';
        
        // Experience Information
        document.getElementById('review-coreCompetencies').textContent = formData.experience.coreCompetencies || 'Not provided';
        document.getElementById('review-yearsInBD').textContent = formData.experience.yearsInBD || 'Not provided';
        
        // Certifications Information
        document.getElementById('review-isoStandard').textContent = formData.certifications.isoStandard || 'Not provided';
        document.getElementById('review-egpStatus').textContent = formData.certifications.egpStatus || 'Not provided';
    }

    // Form submission
    function submitForm() {
        if (!document.getElementById('termsAgreement').checked) {
            toggleError(document.getElementById('termsAgreement'), 'termsAgreementError', true);
            showToast('Please agree to the terms and conditions', 'error');
            return;
        }
        
        // In a real application, you would send the data to a server here
        console.log('Form submitted with data:', formData);
        
        // Show success message
        showToast('Form submitted successfully! Your profile will be verified within 3-5 business days.', 'success');
        
        // Clear saved data
        localStorage.removeItem('ezBdFormData');
        
        // Redirect or show success page (in a real application)
        setTimeout(() => {
            alert('Thank you for submitting your profile! You will receive a confirmation email shortly.');
        }, 1000);
    }

    // Support modal
    function showSupportModal() {
        // In a real application, this would show a modal or redirect to support
        alert('For assistance, please contact our support team at support@ezbd.com or call +880 1712 345 678. Our support hours are 9 AM to 6 PM, Sunday to Thursday.');
    }

    // Toast notification
    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        `;
        
        toastContainer.appendChild(toast);
        
        // Show toast
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        // Hide toast after 5 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toastContainer.removeChild(toast);
            }, 300);
        }, 5000);
    }

    // Start the application when the DOM is loaded
    document.addEventListener('DOMContentLoaded', initApp);
