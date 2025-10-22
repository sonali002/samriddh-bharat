// Government Schemes Data
const schemeData = [
    // Financial Schemes
    {
        id: 1,
        name: "Public Provident Fund (PPF)",
        category: "financial",
        offeredBy: "Government of India",
        eligibility: "Any Indian citizen",
        interestRate: "7.1% per annum (variable)",
        minInvestment: "₹500 per year",
        maxInvestment: "₹1.5 lakh per year",
        tenure: "15 years (extendable)",
        description: "Tax-saving investment scheme with guaranteed returns."
    },
    {
        id: 2,
        name: "Indian Forest Service (IFoS)",
        category: "upsc",
        conductedBy: "Union Public Service Commission",
        eligibility: "Graduates in Science/Engineering, Age: 21-32 years",
        applicationDate: "February-March (annually)",
        examDate: "May-June (Prelims)",
        applicationLink: "https://upsc.gov.in/",
        description: "Recruitment for the Indian Forest Service to manage forest resources."
    },
    {
        id: 3,
        name: "Engineering Services Examination (ESE)",
        category: "upsc",
        conductedBy: "Union Public Service Commission",
        eligibility: "Engineering Graduates, Age: 21-30 years",
        applicationDate: "September-October (annually)",
        examDate: "January (Prelims)",
        applicationLink: "https://upsc.gov.in/",
        description: "Recruitment for technical/engineering positions in various government departments."
    },
    
    // SSC Exams
    {
        id: 4,
        name: "Combined Graduate Level (CGL)",
        category: "ssc",
        conductedBy: "Staff Selection Commission",
        eligibility: "Graduates, Age: 18-32 years",
        applicationDate: "October-November (annually)",
        examDate: "February-March (Tier 1)",
        applicationLink: "https://ssc.nic.in/",
        description: "Recruitment for various Group B and C posts in government departments."
    },
    {
        id: 5,
        name: "Combined Higher Secondary Level (CHSL)",
        category: "ssc",
        conductedBy: "Staff Selection Commission",
        eligibility: "12th Pass, Age: 18-27 years",
        applicationDate: "November-December (annually)",
        examDate: "March-April (Tier 1)",
        applicationLink: "https://ssc.nic.in/",
        description: "Recruitment for LDC, DEO, and other clerical posts in government departments."
    },
    {
        id: 6,
        name: "Junior Engineer (JE)",
        category: "ssc",
        conductedBy: "Staff Selection Commission",
        eligibility: "Diploma/Degree in Engineering, Age: 18-32 years",
        applicationDate: "August-September (annually)",
        examDate: "December (Paper 1)",
        applicationLink: "https://ssc.nic.in/",
        description: "Recruitment for Junior Engineer posts in various government departments."
    },
    
    // Banking Exams
    {
        id: 7,
        name: "SBI Probationary Officer (PO)",
        category: "banking",
        conductedBy: "State Bank of India",
        eligibility: "Graduates, Age: 21-30 years",
        applicationDate: "April-May (annually)",
        examDate: "July (Prelims)",
        applicationLink: "https://sbi.co.in/careers",
        description: "Recruitment for Probationary Officer positions in SBI."
    },
    {
        id: 8,
        name: "IBPS Probationary Officer (PO)",
        category: "banking",
        conductedBy: "Institute of Banking Personnel Selection",
        eligibility: "Graduates, Age: 20-30 years",
        applicationDate: "August (annually)",
        examDate: "October (Prelims)",
        applicationLink: "https://www.ibps.in/",
        description: "Common recruitment process for Probationary Officers in multiple public sector banks."
    },
    {
        id: 9,
        name: "RBI Grade B Officer",
        category: "banking",
        conductedBy: "Reserve Bank of India",
        eligibility: "Graduates, Age: 21-30 years",
        applicationDate: "February-March (annually)",
        examDate: "May (Phase 1)",
        applicationLink: "https://www.rbi.org.in/",
        description: "Recruitment for Grade B Officers in the Reserve Bank of India."
    },
    
    // Defence Exams
    {
        id: 10,
        name: "Combined Defence Services (CDS)",
        category: "defence",
        conductedBy: "Union Public Service Commission",
        eligibility: "Graduates, Age: 19-25 years",
        applicationDate: "June & October (bi-annually)",
        examDate: "February & November",
        applicationLink: "https://upsc.gov.in/",
        description: "Entrance examination for admission to the Indian Military Academy, Air Force Academy, and Naval Academy."
    },
    {
        id: 11,
        name: "National Defence Academy (NDA)",
        category: "defence",
        conductedBy: "Union Public Service Commission",
        eligibility: "12th Pass, Age: 16.5-19.5 years",
        applicationDate: "January & June (bi-annually)",
        examDate: "April & September",
        applicationLink: "https://upsc.gov.in/",
        description: "Entrance examination for admission to the Army, Navy, and Air Force wings of the NDA."
    },
    {
        id: 12,
        name: "AFCAT (Air Force Common Admission Test)",
        category: "defence",
        conductedBy: "Indian Air Force",
        eligibility: "Graduates, Age: 20-24 years",
        applicationDate: "June & December (bi-annually)",
        examDate: "February & August",
        applicationLink: "https://afcat.cdac.in/",
        description: "Entrance examination for commissioning as officers in the Indian Air Force."
    },
    
    // Railway Exams
    {
        id: 13,
        name: "RRB NTPC (Non-Technical Popular Categories)",
        category: "railway",
        conductedBy: "Railway Recruitment Board",
        eligibility: "12th Pass/Graduates, Age: 18-33 years",
        applicationDate: "Varies",
        examDate: "Varies",
        applicationLink: "https://www.rrbcdg.gov.in/",
        description: "Recruitment for various non-technical posts in Indian Railways."
    },
    {
        id: 14,
        name: "RRB Group D",
        category: "railway",
        conductedBy: "Railway Recruitment Board",
        eligibility: "10th Pass, Age: 18-33 years",
        applicationDate: "Varies",
        examDate: "Varies",
        applicationLink: "https://www.rrbcdg.gov.in/",
        description: "Recruitment for Level 1 posts in Indian Railways."
    },
    {
        id: 15,
        name: "RRB ALP (Assistant Loco Pilot) & Technician",
        category: "railway",
        conductedBy: "Railway Recruitment Board",
        eligibility: "10th Pass + ITI/Diploma, Age: 18-30 years",
        applicationDate: "Varies",
        examDate: "Varies",
        applicationLink: "https://www.rrbcdg.gov.in/",
        description: "Recruitment for Assistant Loco Pilot and Technician posts in Indian Railways."
    },
    
    // State PSC Exams
    {
        id: 16,
        name: "State Civil Services",
        category: "state",
        conductedBy: "State Public Service Commissions",
        eligibility: "Graduates, Age: 21-32 years (varies by state)",
        applicationDate: "Varies by state",
        examDate: "Varies by state",
        applicationLink: "Respective State PSC websites",
        description: "Recruitment for various administrative positions at the state level."
    },
    {
        id: 17,
        name: "State Police Services",
        category: "state",
        conductedBy: "State Public Service Commissions/Police Recruitment Boards",
        eligibility: "Graduates, Age: 21-30 years (varies by state)",
        applicationDate: "Varies by state",
        examDate: "Varies by state",
        applicationLink: "Respective State Police/PSC websites",
        description: "Recruitment for Sub-Inspector and other police officer positions at the state level."
    },
    
    // Teaching Exams
    {
        id: 18,
        name: "UGC NET",
        category: "teaching",
        conductedBy: "National Testing Agency (NTA)",
        eligibility: "Post-Graduates, No age limit for Assistant Professor",
        applicationDate: "Varies (conducted multiple times a year)",
        examDate: "Varies",
        applicationLink: "https://ugcnet.nta.nic.in/",
        description: "Determines eligibility for Assistant Professor and Junior Research Fellowship in Indian universities and colleges."
    },
    {
        id: 19,
        name: "CTET (Central Teacher Eligibility Test)",
        category: "teaching",
        conductedBy: "Central Board of Secondary Education (CBSE)",
        eligibility: "Varies based on teaching level",
        applicationDate: "Varies (conducted twice a year)",
        examDate: "Varies",
        applicationLink: "https://ctet.nic.in/",
        description: "Mandatory qualification for appointment as a teacher for Classes I to VIII in central government schools."
    },
    {
        id: 20,
        name: "State TET (Teacher Eligibility Test)",
        category: "teaching",
        conductedBy: "State Education Boards",
        eligibility: "Varies based on teaching level and state",
        applicationDate: "Varies by state",
        examDate: "Varies by state",
        applicationLink: "Respective State Education Board websites",
        description: "Mandatory qualification for appointment as a teacher in state government schools."
    }
];

// DOM Elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const examsList = document.getElementById('exams-list');
const contactForm = document.getElementById('contact-form');
const eligibilityForm = document.getElementById('eligibility-form');
const recommendedExamsContainer = document.getElementById('recommended-exams');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Display all schemes initially
    displaySchemes('all');
    
    // Set up event listeners
    setupEventListeners();
    
    // Add smooth scrolling for navigation links
    setupSmoothScrolling();
    
    // Set up eligibility checker
    setupSchemeEligibilityChecker();
});

// Set up event listeners
function setupEventListeners() {
    // Search functionality
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    // Category filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Display exams based on selected category
            const category = btn.getAttribute('data-filter');
            displayExams(category);
        });
    });
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real application, you would send the form data to a server
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Eligibility form submission
    if (eligibilityForm) {
        eligibilityForm.addEventListener('submit', (e) => {
            e.preventDefault();
            checkEligibility();
        });
    }
}

// Handle search functionality
function handleSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === '') {
        // If search term is empty, show all exams
        displayExams('all');
        return;
    }
    
    // Filter exams based on search term
    const filteredExams = examData.filter(exam => {
        return (
            exam.name.toLowerCase().includes(searchTerm) ||
            exam.category.toLowerCase().includes(searchTerm) ||
            exam.conductedBy.toLowerCase().includes(searchTerm) ||
            exam.description.toLowerCase().includes(searchTerm)
        );
    });
    
    // Display filtered exams
    renderExams(filteredExams);
    
    // Scroll to exams section
    document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
}

// Display exams based on category
function displayExams(category) {
    let examsToDisplay;
    
    if (category === 'all') {
        examsToDisplay = examData;
    } else {
        examsToDisplay = examData.filter(exam => exam.category === category);
    }
    
    renderExams(examsToDisplay);
}

// Render exams to the DOM
function renderExams(exams) {
    // Clear current exams
    examsList.innerHTML = '';
    
    if (exams.length === 0) {
        examsList.innerHTML = `
            <div class="no-results">
                <h3>No exams found</h3>
                <p>Try a different search term or category</p>
            </div>
        `;
        return;
    }
    
    // Create and append exam cards
    exams.forEach(exam => {
        const examCard = document.createElement('div');
        examCard.classList.add('exam-card');
        examCard.setAttribute('data-category', exam.category);
        
        examCard.innerHTML = `
            <div class="exam-card-header">
                <h3>${exam.name}</h3>
            </div>
            <div class="exam-card-body">
                <div class="exam-info">
                    <p><i class="fas fa-building"></i> <strong>Conducted By:</strong> ${exam.conductedBy}</p>
                    <p><i class="fas fa-user-graduate"></i> <strong>Eligibility:</strong> ${exam.eligibility}</p>
                    <p><i class="fas fa-calendar-alt"></i> <strong>Application Date:</strong> ${exam.applicationDate}</p>
                    <p><i class="fas fa-calendar-check"></i> <strong>Exam Date:</strong> ${exam.examDate}</p>
                </div>
                <p>${exam.description}</p>
                <a href="${exam.applicationLink}" class="btn" target="_blank">Apply Now</a>
            </div>
        `;
        
        examsList.appendChild(examCard);
    });
    
    // Add animation to exam cards
    animateExamCards();
}

// Add animation to exam cards
function animateExamCards() {
    const examCards = document.querySelectorAll('.exam-card');
    
    examCards.forEach((card, index) => {
        card.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
        card.style.opacity = '0';
    });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a, .footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Setup scheme eligibility checker functionality
function setupSchemeEligibilityChecker() {
    // Initialize the recommended exams container with a message
    if (recommendedExamsContainer) {
        recommendedExamsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>Fill out the form to find schemes that match your profile</p>
            </div>
        `;
    }
}

// Check eligibility based on user input
function checkEligibility() {
    // Get form values
    const age = parseInt(document.getElementById('age').value);
    const education = document.getElementById('education').value;
    const stream = document.getElementById('stream').value;
    const experience = parseInt(document.getElementById('experience').value);
    
    // Get selected sectors from checkboxes
    const sectorCheckboxes = document.querySelectorAll('input[name="sectors"]:checked');
    const sectors = Array.from(sectorCheckboxes).map(checkbox => checkbox.value);
    
    // Add 'any' if no sectors selected
    if (sectors.length === 0) {
        sectors.push('any');
        console.log('No sectors selected, showing all eligible exams');
    } else {
        console.log('Filtering exams for sectors:', sectors.join(', '));
    }
    
    // Filter exams based on eligibility criteria
    const eligibleExams = findEligibleExams(age, education, stream, experience, sectors);
    
    // Display eligible exams
    displayEligibleExams(eligibleExams, sectors);
    
    // Show results section if hidden
    const resultsSection = document.getElementById('eligibility-results');
    if (resultsSection.classList.contains('hidden')) {
        resultsSection.classList.remove('hidden');
    }
    
    // Scroll to results
    document.querySelector('.eligibility-results').scrollIntoView({ behavior: 'smooth' });
}

// Find eligible exams based on user criteria
function findEligibleExams(age, education, stream, experience, sectors) {
    // Define eligibility rules for different exam categories
    const eligibilityRules = {
        upsc: {
            minAge: 21,
            maxAge: 32,
            minEducation: 'graduate',
            preferredStreams: ['any']
        },
        ssc: {
            minAge: 18,
            maxAge: 32,
            minEducation: '12th',
            preferredStreams: ['any']
        },
        banking: {
            minAge: 20,
            maxAge: 30,
            minEducation: 'graduate',
            preferredStreams: ['any', 'commerce', 'economics', 'mathematics']
        },
        defence: {
            minAge: 19,
            maxAge: 25,
            minEducation: '12th',
            preferredStreams: ['any']
        },
        railway: {
            minAge: 18,
            maxAge: 33,
            minEducation: '10th',
            preferredStreams: ['any']
        },
        state: {
            minAge: 21,
            maxAge: 32,
            minEducation: 'graduate',
            preferredStreams: ['any']
        },
        teaching: {
            minAge: 21,
            maxAge: 40,
            minEducation: 'graduate',
            preferredStreams: ['any']
        }
    };
    
    // Education level hierarchy
    const educationLevels = {
        '10th': 1,
        '12th': 2,
        'diploma': 3,
        'graduate': 4,
        'postgraduate': 5,
        'phd': 6
    };
    
    // Filter exams based on user criteria
    return examData.filter(exam => {
        // Get the category rules
        const rules = eligibilityRules[exam.category];
        if (!rules) return false;
        
        // Check age criteria
        const ageMatch = age >= rules.minAge && age <= rules.maxAge;
        
        // Check education criteria
        const userEducationLevel = educationLevels[education] || 0;
        const requiredEducationLevel = educationLevels[rules.minEducation] || 0;
        const educationMatch = userEducationLevel >= requiredEducationLevel;
        
        // Check stream preference (if applicable)
        const streamMatch = rules.preferredStreams.includes('any') || rules.preferredStreams.includes(stream);
        
        // Check sector interest - ONLY match exams from selected sectors
        const sectorMatch = sectors.includes('any') || sectors.some(sector => sector === exam.category);
        
        // If specific sectors were selected and this exam doesn't match, return false immediately
        if (!sectors.includes('any') && !sectors.includes(exam.category)) {
            return false;
        }
        
        // Calculate match score (for sorting results later)
        let matchScore = 0;
        if (ageMatch) matchScore += 1;
        if (educationMatch) matchScore += 1;
        if (streamMatch) matchScore += 1;
        if (sectorMatch) matchScore += 2; // Give more weight to sector preference
        if (experience >= 2) matchScore += 1; // Bonus for experienced candidates
        
        // Add match score to exam object
        exam.matchScore = matchScore;
        
        // Return true if the exam matches all criteria
        return ageMatch && educationMatch && streamMatch;
    }).sort((a, b) => b.matchScore - a.matchScore); // Sort by match score (highest first)
}

// Display eligible exams in the results container
function displayEligibleExams(eligibleExams, sectors) {
    if (!recommendedExamsContainer) return;
    
    if (eligibleExams.length === 0) {
        recommendedExamsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-exclamation-circle"></i>
                <p>No matching exams found based on your criteria.</p>
                <p>Try adjusting your preferences or explore all available exams in the Categories section.</p>
            </div>
        `;
        return;
    }
    
    // Clear previous results
    recommendedExamsContainer.innerHTML = '';
    
    // Display eligible exams (limit to top 6 matches)
    const topExams = eligibleExams.slice(0, 6);
    
    topExams.forEach(exam => {
        const examElement = document.createElement('div');
        examElement.classList.add('recommended-exam');
        
        examElement.innerHTML = `
            <h4>${exam.name}</h4>
            <p><strong>Category:</strong> ${exam.category.toUpperCase()}</p>
            <p><strong>Conducted By:</strong> ${exam.conductedBy}</p>
            <p><strong>Eligibility:</strong> ${exam.eligibility}</p>
            <a href="#categories" class="btn" onclick="showExamDetails(${exam.id})">View Details</a>
        `;
        
        recommendedExamsContainer.appendChild(examElement);
    });
    
    // Add a message showing the number of matches and selected sectors
    const matchCountElement = document.createElement('div');
    matchCountElement.classList.add('match-count');
    
    let sectorText = '';
    if (sectors.includes('any')) {
        sectorText = 'across all sectors';
    } else {
        const sectorNames = sectors.map(s => s.toUpperCase()).join(', ');
        sectorText = `in selected sector${sectors.length > 1 ? 's' : ''}: ${sectorNames}`;
    }
    
    matchCountElement.innerHTML = `<p>Found ${eligibleExams.length} matching exams ${sectorText} based on your profile.</p>`;
    recommendedExamsContainer.prepend(matchCountElement);
}

// Show exam details in the categories section
function showExamDetails(examId) {
    // Find the exam by ID
    const exam = examData.find(e => e.id === examId);
    if (!exam) return;
    
    // Highlight the exam category
    const categoryBtn = document.querySelector(`.filter-btn[data-filter="${exam.category}"]`);
    if (categoryBtn) {
        // Simulate a click on the category button
        categoryBtn.click();
        
        // Scroll to the categories section
        document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
        
        // Highlight the specific exam card
        setTimeout(() => {
            const examCards = document.querySelectorAll('.exam-card');
            examCards.forEach(card => {
                // Find the card with the matching exam name
                if (card.querySelector('h3').textContent === exam.name) {
                    // Add a highlight effect
                    card.style.boxShadow = '0 0 15px rgba(52, 152, 219, 0.7)';
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // Remove the highlight after a few seconds
                    setTimeout(() => {
                        card.style.boxShadow = '';
                    }, 3000);
                }
            });
        }, 500);
    }
}