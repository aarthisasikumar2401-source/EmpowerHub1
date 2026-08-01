// EMPOWER HUB — Complete 10-Language Learner Dashboard Translations

export interface LearnerTranslationPack {
  // Sidebar Navigation
  sidebarDashboard: string;
  sidebarProfile: string;
  sidebarAIAssistant: string;
  sidebarSkills: string;
  sidebarPortfolio: string;
  sidebarMarketplace: string;
  sidebarMentors: string;
  sidebarOpportunity: string;
  sidebarSchemes: string;
  sidebarFunding: string;
  sidebarCertificates: string;
  sidebarCommunity: string;
  sidebarNotifications: string;
  sidebarSettings: string;

  // Dashboard Home
  welcomeBack: string;
  todaysSuggestion: string;
  profileCompletion: string;
  completeProfile: string;
  learningProgress: string;
  walletBalance: string;
  totalEarnings: string;
  pendingOrders: string;
  activeMentors: string;
  aiSuggestionTitle: string;
  aiSuggestionDesc: string;
  marketplaceSummary: string;
  viewAll: string;
  bookNow: string;
  applyNow: string;
  learnMore: string;
  generate: string;
  save: string;
  cancel: string;
  edit: string;
  delete: string;
  upload: string;
  download: string;
  share: string;
  verify: string;
  submit: string;
  search: string;
  filter: string;
  sort: string;
  close: string;
  open: string;
  next: string;
  previous: string;
  loading: string;
  success: string;
  error: string;
  noData: string;

  // AI Business Assistant
  aiAssistantTitle: string;
  aiAssistantSubtitle: string;
  aiListening: string;
  aiThinking: string;
  aiPlaceholder: string;
  voiceTip: string;
  generateBusinessPlan: string;
  generateBrandName: string;
  generateMarketing: string;
  generatePricing: string;
  generatePoster: string;
  generateSocialPost: string;
  findSchemes: string;
  aiResultTitle: string;

  // Profile
  profileTitle: string;
  profileSubtitle: string;
  profilePicture: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  skills: string;
  experience: string;
  education: string;
  languages: string;
  portfolio: string;
  resume: string;
  linkedin: string;
  github: string;
  website: string;
  businessInterests: string;
  saveProfile: string;

  // Skill Development
  skillsTitle: string;
  skillsSubtitle: string;
  myCourses: string;
  browseAll: string;
  continueLesson: string;
  startCourse: string;
  progress: string;
  lessonOf: string;
  quizAvailable: string;
  assignmentDue: string;
  roadmapTitle: string;
  aiSkillAssessment: string;
  takeAssessment: string;
  yourLevel: string;
  nextSkill: string;

  // Portfolio
  portfolioTitle: string;
  portfolioSubtitle: string;
  addProject: string;
  myProjects: string;
  myAchievements: string;
  myExperience: string;
  createPortfolio: string;
  aiImproveDesc: string;
  visitPortfolio: string;
  projectTitle: string;
  projectDesc: string;

  // Marketplace
  marketplaceTitle: string;
  marketplaceSubtitle: string;
  addProduct: string;
  myProducts: string;
  myOrders: string;
  myEarnings: string;
  productName: string;
  productPrice: string;
  productCategory: string;
  productDesc: string;
  aiImproveListings: string;
  totalSales: string;
  pendingPayout: string;
  customerReviews: string;

  // Mentors
  mentorsTitle: string;
  mentorsSubtitle: string;
  searchMentors: string;
  filterBySkill: string;
  bookSession: string;
  joinLiveSession: string;
  chatMentor: string;
  rateMentor: string;
  aiRecommended: string;
  sessionBooked: string;
  perSession: string;
  rating: string;
  reviews: string;
  expertise: string;

  // Opportunity Finder
  opportunityTitle: string;
  opportunitySubtitle: string;
  internships: string;
  jobs: string;
  freelance: string;
  competitions: string;
  hackathons: string;
  investors: string;
  localBusiness: string;
  aiPersonalized: string;
  applyForOpportunity: string;
  deadline: string;
  stipend: string;

  // Government Schemes
  schemesTitle: string;
  schemesSubtitle: string;
  eligibility: string;
  requiredDocs: string;
  applyScheme: string;
  schemeAmount: string;
  schemeCategory: string;
  aiSchemeMatch: string;
  mudraSchemeName: string;
  mudraSchemeDesc: string;
  pmegpSchemeName: string;
  pmegpSchemeDesc: string;
  standupSchemeName: string;
  standupSchemeDesc: string;

  // Funding
  fundingTitle: string;
  fundingSubtitle: string;
  loans: string;
  incubators: string;
  accelerators: string;
  grants: string;
  angelInvestors: string;
  vcFunds: string;
  checkEligibility: string;
  applyFunding: string;
  fundingAmount: string;

  // Certificates
  certificatesTitle: string;
  certificatesSubtitle: string;
  downloadCert: string;
  shareCert: string;
  verifyCert: string;
  issuedBy: string;
  issuedOn: string;
  certScore: string;
  certValid: string;
  noCerts: string;

  // Community
  communityTitle: string;
  communitySubtitle: string;
  createPost: string;
  askQuestion: string;
  shareProject: string;
  followMentor: string;
  followBusiness: string;
  likePost: string;
  commentPost: string;
  trending: string;
  latestPosts: string;
  yourFeed: string;

  // Notifications
  notificationsTitle: string;
  markAllRead: string;
  noNotifications: string;
  newMentor: string;
  newOrder: string;
  schemeMatch: string;
  courseComplete: string;
  certEarned: string;

  // Settings
  settingsTitle: string;
  languageSettings: string;
  chooseLanguage: string;
  themeSettings: string;
  darkMode: string;
  lightMode: string;
  passwordSettings: string;
  changePassword: string;
  notificationSettings: string;
  privacySettings: string;
  deleteAccount: string;
  saveSettings: string;

  // Voice
  voiceGreeting: string;
  voiceListening: string;
  voiceProcessing: string;
  voiceCommandNav: string;
}

const en: LearnerTranslationPack = {
  sidebarDashboard: 'Dashboard',
  sidebarProfile: 'My Profile',
  sidebarAIAssistant: 'AI Business Assistant',
  sidebarSkills: 'Skill Development',
  sidebarPortfolio: 'My Portfolio',
  sidebarMarketplace: 'My Marketplace',
  sidebarMentors: 'Mentors',
  sidebarOpportunity: 'AI Opportunity Finder',
  sidebarSchemes: 'Government Schemes',
  sidebarFunding: 'Funding',
  sidebarCertificates: 'Certificates',
  sidebarCommunity: 'Community',
  sidebarNotifications: 'Notifications',
  sidebarSettings: 'Settings',

  welcomeBack: 'Welcome back',
  todaysSuggestion: "Today's AI Suggestions",
  profileCompletion: 'Profile Completion',
  completeProfile: 'Complete Profile',
  learningProgress: 'Learning Progress',
  walletBalance: 'Wallet Balance',
  totalEarnings: 'Total Earnings',
  pendingOrders: 'Pending Orders',
  activeMentors: 'Active Mentors',
  aiSuggestionTitle: 'AI Business Insight',
  aiSuggestionDesc: 'Based on your tailoring skills, you can earn ₹45,000/month by offering custom blouse stitching services online.',
  marketplaceSummary: 'Marketplace Summary',
  viewAll: 'View All',
  bookNow: 'Book Now',
  applyNow: 'Apply Now',
  learnMore: 'Learn More',
  generate: 'Generate',
  save: 'Save',
  cancel: 'Cancel',
  edit: 'Edit',
  delete: 'Delete',
  upload: 'Upload',
  download: 'Download',
  share: 'Share',
  verify: 'Verify',
  submit: 'Submit',
  search: 'Search',
  filter: 'Filter',
  sort: 'Sort',
  close: 'Close',
  open: 'Open',
  next: 'Next',
  previous: 'Previous',
  loading: 'Loading...',
  success: 'Success!',
  error: 'Error occurred',
  noData: 'No data available',

  aiAssistantTitle: 'AI Business Assistant',
  aiAssistantSubtitle: 'Your AI Business Partner — Speak or type your skill, goal, or problem. AI will build your entire business plan.',
  aiListening: 'Listening to you...',
  aiThinking: 'AI is analyzing your request...',
  aiPlaceholder: 'Say "I make handmade candles" or "I want to start a tailoring business"...',
  voiceTip: 'Tip: Press the microphone and speak in any language',
  generateBusinessPlan: 'Generate Business Plan',
  generateBrandName: 'Generate Brand Name & Logo',
  generateMarketing: 'Generate Marketing Strategy',
  generatePricing: 'Generate Pricing Strategy',
  generatePoster: 'Generate Poster / Banner',
  generateSocialPost: 'Generate Social Media Post',
  findSchemes: 'Find Government Schemes',
  aiResultTitle: 'AI Generated Business Plan',

  profileTitle: 'My Profile',
  profileSubtitle: 'Keep your profile updated to get better AI recommendations and marketplace visibility.',
  profilePicture: 'Profile Picture',
  fullName: 'Full Name',
  email: 'Email Address',
  phone: 'Phone Number',
  location: 'City, State',
  skills: 'Skills (comma separated)',
  experience: 'Experience',
  education: 'Education',
  languages: 'Languages Spoken',
  portfolio: 'Portfolio URL',
  resume: 'Resume / CV',
  linkedin: 'LinkedIn Profile',
  github: 'GitHub Profile',
  website: 'Personal Website',
  businessInterests: 'Business Interests',
  saveProfile: 'Save Profile',

  skillsTitle: 'Skill Development',
  skillsSubtitle: 'AI-personalized learning paths, courses, quizzes, and practical assignments.',
  myCourses: 'My Courses',
  browseAll: 'Browse All Courses',
  continueLesson: 'Continue Lesson',
  startCourse: 'Start Course',
  progress: 'Progress',
  lessonOf: 'Lesson',
  quizAvailable: 'Quiz Available',
  assignmentDue: 'Assignment Due',
  roadmapTitle: 'Your Learning Roadmap',
  aiSkillAssessment: 'AI Skill Assessment',
  takeAssessment: 'Take Assessment',
  yourLevel: 'Your Level',
  nextSkill: 'Recommended Next Skill',

  portfolioTitle: 'My Portfolio',
  portfolioSubtitle: 'Showcase your work and skills to attract customers, mentors, and businesses.',
  addProject: 'Add Project',
  myProjects: 'My Projects',
  myAchievements: 'Achievements',
  myExperience: 'Experience',
  createPortfolio: 'Create Portfolio Website',
  aiImproveDesc: 'AI Improve Description',
  visitPortfolio: 'Visit Portfolio',
  projectTitle: 'Project Title',
  projectDesc: 'Project Description',

  marketplaceTitle: 'My Marketplace',
  marketplaceSubtitle: 'Sell your products, services, workshops, and digital items. AI improves your listings automatically.',
  addProduct: 'Add Product / Service',
  myProducts: 'My Products',
  myOrders: 'My Orders',
  myEarnings: 'My Earnings',
  productName: 'Product Name',
  productPrice: 'Price (₹)',
  productCategory: 'Category',
  productDesc: 'Product Description',
  aiImproveListings: 'AI Improve Listings',
  totalSales: 'Total Sales',
  pendingPayout: 'Pending Payout',
  customerReviews: 'Customer Reviews',

  mentorsTitle: 'Find Mentors',
  mentorsSubtitle: 'Connect with verified mentors, book 1-on-1 sessions, join live workshops.',
  searchMentors: 'Search Mentors',
  filterBySkill: 'Filter by Skill',
  bookSession: 'Book Session',
  joinLiveSession: 'Join Live Session',
  chatMentor: 'Chat with Mentor',
  rateMentor: 'Rate Mentor',
  aiRecommended: 'AI Recommended',
  sessionBooked: 'Session Booked!',
  perSession: 'per session',
  rating: 'Rating',
  reviews: 'Reviews',
  expertise: 'Expertise',

  opportunityTitle: 'AI Opportunity Finder',
  opportunitySubtitle: 'AI scans thousands of opportunities and recommends the best matches for your profile.',
  internships: 'Internships',
  jobs: 'Jobs',
  freelance: 'Freelance Projects',
  competitions: 'Competitions',
  hackathons: 'Hackathons',
  investors: 'Investors',
  localBusiness: 'Local Business',
  aiPersonalized: 'AI Personalized For You',
  applyForOpportunity: 'Apply',
  deadline: 'Deadline',
  stipend: 'Stipend / Budget',

  schemesTitle: 'Government Schemes',
  schemesSubtitle: 'AI matches you to eligible government schemes, loans, and subsidies based on your profile.',
  eligibility: 'Eligibility Criteria',
  requiredDocs: 'Required Documents',
  applyScheme: 'Apply for Scheme',
  schemeAmount: 'Scheme Amount',
  schemeCategory: 'Category',
  aiSchemeMatch: 'AI Matched Schemes',
  mudraSchemeName: 'PM Mudra Yojana (Shishu)',
  mudraSchemeDesc: 'Up to ₹50,000 collateral-free micro loan for small businesses.',
  pmegpSchemeName: 'PMEGP (Employment Generation)',
  pmegpSchemeDesc: 'Up to 35% capital subsidy for manufacturing and service businesses.',
  standupSchemeName: 'Stand-Up India Scheme',
  standupSchemeDesc: '₹10 Lakh to ₹1 Crore loan for SC/ST and women entrepreneurs.',

  fundingTitle: 'Funding & Investment',
  fundingSubtitle: 'AI recommends the right funding options based on your business stage and goals.',
  loans: 'Bank Loans',
  incubators: 'Incubators',
  accelerators: 'Accelerators',
  grants: 'Grants',
  angelInvestors: 'Angel Investors',
  vcFunds: 'VC Funds',
  checkEligibility: 'Check Eligibility',
  applyFunding: 'Apply for Funding',
  fundingAmount: 'Funding Range',

  certificatesTitle: 'My Certificates',
  certificatesSubtitle: 'Download, share, and verify your earned skill certificates.',
  downloadCert: 'Download PDF',
  shareCert: 'Share Certificate',
  verifyCert: 'Verify Certificate',
  issuedBy: 'Issued by',
  issuedOn: 'Issued on',
  certScore: 'Score',
  certValid: 'Valid Until',
  noCerts: 'No certificates yet. Complete a course to earn your first certificate.',

  communityTitle: 'Community',
  communitySubtitle: 'Connect, collaborate, and grow with fellow learners, mentors, and businesses.',
  createPost: 'Create Post',
  askQuestion: 'Ask a Question',
  shareProject: 'Share Project',
  followMentor: 'Follow Mentor',
  followBusiness: 'Follow Business',
  likePost: 'Like',
  commentPost: 'Comment',
  trending: 'Trending',
  latestPosts: 'Latest Posts',
  yourFeed: 'Your Feed',

  notificationsTitle: 'Notifications',
  markAllRead: 'Mark All as Read',
  noNotifications: 'No new notifications',
  newMentor: 'New mentor recommendation for you',
  newOrder: 'New order received',
  schemeMatch: 'New government scheme matches your profile',
  courseComplete: 'Course completed! Certificate ready',
  certEarned: 'New certificate earned',

  settingsTitle: 'Settings',
  languageSettings: 'Language Settings',
  chooseLanguage: 'Choose Language',
  themeSettings: 'Theme Settings',
  darkMode: 'Dark Mode',
  lightMode: 'Light Mode',
  passwordSettings: 'Password Settings',
  changePassword: 'Change Password',
  notificationSettings: 'Notification Preferences',
  privacySettings: 'Privacy Settings',
  deleteAccount: 'Delete Account',
  saveSettings: 'Save Settings',

  voiceGreeting: "Hello! I'm your AI Business Assistant. How can I help you today?",
  voiceListening: 'Listening... Speak now!',
  voiceProcessing: 'Processing your command...',
  voiceCommandNav: 'Navigating to',
};

const ta: LearnerTranslationPack = {
  sidebarDashboard: 'டாஷ்போர்டு',
  sidebarProfile: 'என் சுயவிவரம்',
  sidebarAIAssistant: 'AI வணிக உதவியாளர்',
  sidebarSkills: 'திறன் மேம்பாடு',
  sidebarPortfolio: 'என் போர்ட்ஃபோலியோ',
  sidebarMarketplace: 'என் சந்தை',
  sidebarMentors: 'வழிகாட்டிகள்',
  sidebarOpportunity: 'AI வாய்ப்பு கண்டறிவி',
  sidebarSchemes: 'அரசு திட்டங்கள்',
  sidebarFunding: 'நிதியுதவி',
  sidebarCertificates: 'சான்றிதழ்கள்',
  sidebarCommunity: 'சமூகம்',
  sidebarNotifications: 'அறிவிப்புகள்',
  sidebarSettings: 'அமைப்புகள்',

  welcomeBack: 'மீண்டும் வருக',
  todaysSuggestion: 'இன்றைய AI பரிந்துரைகள்',
  profileCompletion: 'சுயவிவர நிறைவு',
  completeProfile: 'சுயவிவரம் பூர்த்தி செய்க',
  learningProgress: 'கற்றல் முன்னேற்றம்',
  walletBalance: 'வாலட் இருப்பு',
  totalEarnings: 'மொத்த வருமானம்',
  pendingOrders: 'நிலுவையில் உள்ள ஆர்டர்கள்',
  activeMentors: 'செயலில் உள்ள வழிகாட்டிகள்',
  aiSuggestionTitle: 'AI வணிக நுண்ணறிவு',
  aiSuggestionDesc: 'உங்கள் தையல் திறனின் அடிப்படையில், நீங்கள் ஆன்லைன் மூலம் தனிப்பயன் ஜாக்கெட் தைக்கும் சேவை வழங்கி மாதம் ₹45,000 சம்பாதிக்கலாம்.',
  marketplaceSummary: 'சந்தை சுருக்கம்',
  viewAll: 'அனைத்தையும் காண்க',
  bookNow: 'இப்போதே பதிவு செய்க',
  applyNow: 'இப்போதே விண்ணப்பிக்க',
  learnMore: 'மேலும் அறிய',
  generate: 'உருவாக்கு',
  save: 'சேமி',
  cancel: 'ரத்து செய்',
  edit: 'திருத்து',
  delete: 'நீக்கு',
  upload: 'பதிவேற்று',
  download: 'பதிவிறக்கு',
  share: 'பகிர்',
  verify: 'சரிபார்',
  submit: 'சமர்ப்பி',
  search: 'தேடு',
  filter: 'வடிகட்டு',
  sort: 'வரிசைப்படுத்து',
  close: 'மூடு',
  open: 'திற',
  next: 'அடுத்து',
  previous: 'முந்தைய',
  loading: 'ஏற்றுகிறது...',
  success: 'வெற்றி!',
  error: 'பிழை ஏற்பட்டது',
  noData: 'தரவு இல்லை',

  aiAssistantTitle: 'AI வணிக உதவியாளர்',
  aiAssistantSubtitle: 'உங்கள் AI வணிக கூட்டாளி — உங்கள் திறன், இலக்கு அல்லது பிரச்சனையை பேசுங்கள் அல்லது தட்டச்சு செய்யுங்கள். AI உங்கள் முழு வணிக திட்டத்தை உருவாக்கும்.',
  aiListening: 'உங்கள் குரலைக் கேட்கிறது...',
  aiThinking: 'AI உங்கள் கோரிக்கையை பகுப்பாய்வு செய்கிறது...',
  aiPlaceholder: '"நான் கைவினை மெழுகுவர்த்தி செய்கிறேன்" அல்லது "தையல் வணிகம் தொடங்க விரும்புகிறேன்" என்று சொல்லுங்கள்...',
  voiceTip: 'குறிப்பு: மைக்ரோஃபோனை அழுத்தி எந்த மொழியிலும் பேசுங்கள்',
  generateBusinessPlan: 'வணிக திட்டம் உருவாக்கு',
  generateBrandName: 'பிராண்ட் பெயர் & லோகோ உருவாக்கு',
  generateMarketing: 'சந்தைப்படுத்தல் உத்தி உருவாக்கு',
  generatePricing: 'விலை நிர்ணய உத்தி உருவாக்கு',
  generatePoster: 'சுவரொட்டி / பேனர் உருவாக்கு',
  generateSocialPost: 'சமூக ஊடக பதிவு உருவாக்கு',
  findSchemes: 'அரசு திட்டங்களைக் கண்டறி',
  aiResultTitle: 'AI உருவாக்கிய வணிக திட்டம்',

  profileTitle: 'என் சுயவிவரம்',
  profileSubtitle: 'சிறந்த AI பரிந்துரைகள் மற்றும் சந்தை தெரிவுநிலை பெற உங்கள் சுயவிவரத்தை புதுப்பியுங்கள்.',
  profilePicture: 'சுயவிவர படம்',
  fullName: 'முழு பெயர்',
  email: 'மின்னஞ்சல் முகவரி',
  phone: 'தொலைபேசி எண்',
  location: 'நகர், மாநிலம்',
  skills: 'திறன்கள் (கமாவால் பிரிக்கப்பட்டவை)',
  experience: 'அனுபவம்',
  education: 'கல்வி',
  languages: 'பேசும் மொழிகள்',
  portfolio: 'போர்ட்ஃபோலியோ URL',
  resume: 'விண்ணப்பம் / CV',
  linkedin: 'LinkedIn சுயவிவரம்',
  github: 'GitHub சுயவிவரம்',
  website: 'தனிப்பட்ட இணையதளம்',
  businessInterests: 'வணிக ஆர்வங்கள்',
  saveProfile: 'சுயவிவரம் சேமி',

  skillsTitle: 'திறன் மேம்பாடு',
  skillsSubtitle: 'AI தனிப்பயனாக்கப்பட்ட கற்றல் பாதைகள், படிப்புகள், வினாடி வினாக்கள் மற்றும் நடைமுறை பணிகள்.',
  myCourses: 'என் படிப்புகள்',
  browseAll: 'அனைத்து படிப்புகளையும் உலாவு',
  continueLesson: 'பாடத்தைத் தொடர்',
  startCourse: 'படிப்பைத் தொடங்கு',
  progress: 'முன்னேற்றம்',
  lessonOf: 'பாடம்',
  quizAvailable: 'வினாடி வினா கிடைக்கிறது',
  assignmentDue: 'பணி தேதி',
  roadmapTitle: 'உங்கள் கற்றல் வரைபடம்',
  aiSkillAssessment: 'AI திறன் மதிப்பீடு',
  takeAssessment: 'மதிப்பீடு எடு',
  yourLevel: 'உங்கள் நிலை',
  nextSkill: 'அடுத்த பரிந்துரைக்கப்பட்ட திறன்',

  portfolioTitle: 'என் போர்ட்ஃபோலியோ',
  portfolioSubtitle: 'வாடிக்கையாளர்கள், வழிகாட்டிகள் மற்றும் வணிகங்களை ஈர்க்க உங்கள் பணி மற்றும் திறன்களை காட்சிப்படுத்துங்கள்.',
  addProject: 'திட்டம் சேர்',
  myProjects: 'என் திட்டங்கள்',
  myAchievements: 'சாதனைகள்',
  myExperience: 'அனுபவம்',
  createPortfolio: 'போர்ட்ஃபோலியோ இணையதளம் உருவாக்கு',
  aiImproveDesc: 'AI விளக்கத்தை மேம்படுத்து',
  visitPortfolio: 'போர்ட்ஃபோலியோ பார்வையிட',
  projectTitle: 'திட்டத்தின் தலைப்பு',
  projectDesc: 'திட்டத்தின் விளக்கம்',

  marketplaceTitle: 'என் சந்தை',
  marketplaceSubtitle: 'உங்கள் பொருட்கள், சேவைகள், பட்டறைகள் மற்றும் டிஜிட்டல் பொருட்களை விற்கவும். AI உங்கள் பட்டியல்களை தானாகவே மேம்படுத்துகிறது.',
  addProduct: 'பொருள் / சேவை சேர்',
  myProducts: 'என் பொருட்கள்',
  myOrders: 'என் ஆர்டர்கள்',
  myEarnings: 'என் வருமானம்',
  productName: 'பொருளின் பெயர்',
  productPrice: 'விலை (₹)',
  productCategory: 'வகை',
  productDesc: 'பொருளின் விளக்கம்',
  aiImproveListings: 'AI பட்டியல்களை மேம்படுத்து',
  totalSales: 'மொத்த விற்பனை',
  pendingPayout: 'நிலுவையில் உள்ள கொடுப்பனவு',
  customerReviews: 'வாடிக்கையாளர் மதிப்புரைகள்',

  mentorsTitle: 'வழிகாட்டிகளைக் கண்டறி',
  mentorsSubtitle: 'சரிபார்க்கப்பட்ட வழிகாட்டிகளுடன் இணை, 1-ஆன்-1 அமர்வுகளை பதிவு செய்',
  searchMentors: 'வழிகாட்டிகளைத் தேடு',
  filterBySkill: 'திறனால் வடிகட்டு',
  bookSession: 'அமர்வு பதிவு செய்',
  joinLiveSession: 'நேரடி அமர்வில் சேர்',
  chatMentor: 'வழிகாட்டியுடன் அரட்டை',
  rateMentor: 'வழிகாட்டியை மதிப்பிடு',
  aiRecommended: 'AI பரிந்துரை',
  sessionBooked: 'அமர்வு பதிவாகிவிட்டது!',
  perSession: 'ஒரு அமர்வுக்கு',
  rating: 'மதிப்பீடு',
  reviews: 'மதிப்புரைகள்',
  expertise: 'நிபுணத்துவம்',

  opportunityTitle: 'AI வாய்ப்பு கண்டறிவி',
  opportunitySubtitle: 'AI ஆயிரக்கணக்கான வாய்ப்புகளை ஸ்கேன் செய்து உங்கள் சுயவிவரத்திற்கு சிறந்த பொருத்தங்களை பரிந்துரைக்கிறது.',
  internships: 'இன்டர்ன்ஷிப்',
  jobs: 'வேலைகள்',
  freelance: 'ஃப்ரீலான்ஸ் திட்டங்கள்',
  competitions: 'போட்டிகள்',
  hackathons: 'ஹேக்கதான்கள்',
  investors: 'முதலீட்டாளர்கள்',
  localBusiness: 'உள்ளூர் வணிகம்',
  aiPersonalized: 'AI உங்களுக்காக தனிப்பயனாக்கியது',
  applyForOpportunity: 'விண்ணப்பி',
  deadline: 'கடைசி தேதி',
  stipend: 'ஊதியம் / பட்ஜெட்',

  schemesTitle: 'அரசு திட்டங்கள்',
  schemesSubtitle: 'AI உங்கள் சுயவிவரத்தின் அடிப்படையில் தகுதியான அரசு திட்டங்கள், கடன்கள் மற்றும் மானியங்களை பொருத்துகிறது.',
  eligibility: 'தகுதி அளவுகோல்',
  requiredDocs: 'தேவையான ஆவணங்கள்',
  applyScheme: 'திட்டத்திற்கு விண்ணப்பி',
  schemeAmount: 'திட்டத் தொகை',
  schemeCategory: 'வகை',
  aiSchemeMatch: 'AI பொருத்தமான திட்டங்கள்',
  mudraSchemeName: 'பிரதமர் முத்ரா யோஜனா (சிஷு)',
  mudraSchemeDesc: 'சிறு வணிகங்களுக்கு ₹50,000 வரை பிணையற்ற குறு கடன்.',
  pmegpSchemeName: 'PMEGP (தொழில் உருவாக்கம்)',
  pmegpSchemeDesc: 'உற்பத்தி மற்றும் சேவை வணிகங்களுக்கு 35% வரை மூலதன மானியம்.',
  standupSchemeName: 'ஸ்டாண்ட்-அப் இந்தியா திட்டம்',
  standupSchemeDesc: 'SC/ST மற்றும் பெண் தொழிலதிபர்களுக்கு ₹10 லட்சம் முதல் ₹1 கோடி வரை கடன்.',

  fundingTitle: 'நிதியுதவி & முதலீடு',
  fundingSubtitle: 'AI உங்கள் வணிக நிலை மற்றும் இலக்குகளின் அடிப்படையில் சரியான நிதியுதவி விருப்பங்களை பரிந்துரைக்கிறது.',
  loans: 'வங்கி கடன்கள்',
  incubators: 'இன்குபேட்டர்கள்',
  accelerators: 'அச்செலரேட்டர்கள்',
  grants: 'மானியங்கள்',
  angelInvestors: 'ஏஞ்சல் முதலீட்டாளர்கள்',
  vcFunds: 'VC நிதிகள்',
  checkEligibility: 'தகுதி சரிபார்',
  applyFunding: 'நிதியுதவிக்கு விண்ணப்பி',
  fundingAmount: 'நிதி வரம்பு',

  certificatesTitle: 'என் சான்றிதழ்கள்',
  certificatesSubtitle: 'உங்கள் திறன் சான்றிதழ்களை பதிவிறக்கவும், பகிரவும் மற்றும் சரிபார்க்கவும்.',
  downloadCert: 'PDF பதிவிறக்கு',
  shareCert: 'சான்றிதழ் பகிர்',
  verifyCert: 'சான்றிதழ் சரிபார்',
  issuedBy: 'வழங்கியவர்',
  issuedOn: 'வழங்கிய தேதி',
  certScore: 'மதிப்பெண்',
  certValid: 'செல்லுபடியான தேதி',
  noCerts: 'இன்னும் சான்றிதழ்கள் இல்லை. உங்கள் முதல் சான்றிதழ் பெற படிப்பை முடிக்கவும்.',

  communityTitle: 'சமூகம்',
  communitySubtitle: 'கற்பவர்கள், வழிகாட்டிகள் மற்றும் வணிகங்களுடன் இணை, ஒத்துழை மற்றும் வளர்.',
  createPost: 'பதிவு உருவாக்கு',
  askQuestion: 'கேள்வி கேள்',
  shareProject: 'திட்டம் பகிர்',
  followMentor: 'வழிகாட்டியை பின்தொடர்',
  followBusiness: 'வணிகத்தை பின்தொடர்',
  likePost: 'விரும்பு',
  commentPost: 'கருத்து சொல்',
  trending: 'போக்கு',
  latestPosts: 'சமீபத்திய பதிவுகள்',
  yourFeed: 'உங்கள் ஊட்டம்',

  notificationsTitle: 'அறிவிப்புகள்',
  markAllRead: 'அனைத்தையும் படித்ததாக குறி',
  noNotifications: 'புதிய அறிவிப்புகள் இல்லை',
  newMentor: 'உங்களுக்கான புதிய வழிகாட்டி பரிந்துரை',
  newOrder: 'புதிய ஆர்டர் பெறப்பட்டது',
  schemeMatch: 'புதிய அரசு திட்டம் உங்கள் சுயவிவரத்துடன் பொருந்துகிறது',
  courseComplete: 'படிப்பு முடிந்தது! சான்றிதழ் தயார்',
  certEarned: 'புதிய சான்றிதழ் பெறப்பட்டது',

  settingsTitle: 'அமைப்புகள்',
  languageSettings: 'மொழி அமைப்புகள்',
  chooseLanguage: 'மொழி தேர்ந்தெடு',
  themeSettings: 'தீம் அமைப்புகள்',
  darkMode: 'இருண்ட முறை',
  lightMode: 'வெளிர் முறை',
  passwordSettings: 'கடவுச்சொல் அமைப்புகள்',
  changePassword: 'கடவுச்சொல் மாற்று',
  notificationSettings: 'அறிவிப்பு விருப்பத்தேர்வுகள்',
  privacySettings: 'தனியுரிமை அமைப்புகள்',
  deleteAccount: 'கணக்கு நீக்கு',
  saveSettings: 'அமைப்புகள் சேமி',

  voiceGreeting: 'வணக்கம்! நான் உங்கள் AI வணிக உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?',
  voiceListening: 'கேட்கிறேன்... இப்போது பேசுங்கள்!',
  voiceProcessing: 'உங்கள் கட்டளையை செயலாக்குகிறது...',
  voiceCommandNav: 'இங்கு செல்கிறோம்',
};

const hi: LearnerTranslationPack = {
  sidebarDashboard: 'डैशबोर्ड',
  sidebarProfile: 'मेरी प्रोफ़ाइल',
  sidebarAIAssistant: 'AI बिजनेस असिस्टेंट',
  sidebarSkills: 'कौशल विकास',
  sidebarPortfolio: 'मेरा पोर्टफोलियो',
  sidebarMarketplace: 'मेरा मार्केटप्लेस',
  sidebarMentors: 'मेंटर्स',
  sidebarOpportunity: 'AI अवसर खोजक',
  sidebarSchemes: 'सरकारी योजनाएं',
  sidebarFunding: 'फंडिंग',
  sidebarCertificates: 'प्रमाण पत्र',
  sidebarCommunity: 'कम्युनिटी',
  sidebarNotifications: 'सूचनाएं',
  sidebarSettings: 'सेटिंग्स',

  welcomeBack: 'वापसी पर स्वागत है',
  todaysSuggestion: 'आज की AI सुझाव',
  profileCompletion: 'प्रोफ़ाइल पूर्णता',
  completeProfile: 'प्रोफ़ाइल पूरी करें',
  learningProgress: 'सीखने की प्रगति',
  walletBalance: 'वॉलेट बैलेंस',
  totalEarnings: 'कुल कमाई',
  pendingOrders: 'लंबित ऑर्डर',
  activeMentors: 'सक्रिय मेंटर',
  aiSuggestionTitle: 'AI बिजनेस इनसाइट',
  aiSuggestionDesc: 'आपकी सिलाई कौशल के आधार पर, आप ऑनलाइन कस्टम ब्लाउज सिलाई सेवाएं देकर प्रतिमाह ₹45,000 कमा सकते हैं।',
  marketplaceSummary: 'मार्केटप्लेस सारांश',
  viewAll: 'सभी देखें',
  bookNow: 'अभी बुक करें',
  applyNow: 'अभी आवेदन करें',
  learnMore: 'और जानें',
  generate: 'उत्पन्न करें',
  save: 'सहेजें',
  cancel: 'रद्द करें',
  edit: 'संपादित करें',
  delete: 'हटाएं',
  upload: 'अपलोड करें',
  download: 'डाउनलोड करें',
  share: 'साझा करें',
  verify: 'सत्यापित करें',
  submit: 'जमा करें',
  search: 'खोजें',
  filter: 'फ़िल्टर',
  sort: 'क्रमबद्ध करें',
  close: 'बंद करें',
  open: 'खोलें',
  next: 'अगला',
  previous: 'पिछला',
  loading: 'लोड हो रहा है...',
  success: 'सफलता!',
  error: 'त्रुटि हुई',
  noData: 'कोई डेटा उपलब्ध नहीं',

  aiAssistantTitle: 'AI बिजनेस असिस्टेंट',
  aiAssistantSubtitle: 'आपका AI बिजनेस पार्टनर — अपनी कौशल, लक्ष्य या समस्या बोलें या टाइप करें। AI आपकी पूरी बिजनेस योजना बनाएगा।',
  aiListening: 'आपको सुन रहा हूं...',
  aiThinking: 'AI आपकी request का विश्लेषण कर रहा है...',
  aiPlaceholder: '"मैं हस्तनिर्मित मोमबत्तियां बनाता हूं" या "मैं सिलाई व्यवसाय शुरू करना चाहता हूं" कहें...',
  voiceTip: 'टिप: माइक्रोफोन दबाएं और किसी भी भाषा में बोलें',
  generateBusinessPlan: 'बिजनेस प्लान बनाएं',
  generateBrandName: 'ब्रांड नाम और लोगो बनाएं',
  generateMarketing: 'मार्केटिंग रणनीति बनाएं',
  generatePricing: 'मूल्य निर्धारण रणनीति बनाएं',
  generatePoster: 'पोस्टर / बैनर बनाएं',
  generateSocialPost: 'सोशल मीडिया पोस्ट बनाएं',
  findSchemes: 'सरकारी योजनाएं खोजें',
  aiResultTitle: 'AI द्वारा उत्पन्न बिजनेस प्लान',

  profileTitle: 'मेरी प्रोफ़ाइल',
  profileSubtitle: 'बेहतर AI अनुशंसाएं और मार्केटप्लेस दृश्यता के लिए अपनी प्रोफ़ाइल अपडेट रखें।',
  profilePicture: 'प्रोफ़ाइल तस्वीर',
  fullName: 'पूरा नाम',
  email: 'ईमेल पता',
  phone: 'फ़ोन नंबर',
  location: 'शहर, राज्य',
  skills: 'कौशल (अल्पविराम से अलग)',
  experience: 'अनुभव',
  education: 'शिक्षा',
  languages: 'बोली जाने वाली भाषाएं',
  portfolio: 'पोर्टफोलियो URL',
  resume: 'रेज़्यूमे / CV',
  linkedin: 'LinkedIn प्रोफ़ाइल',
  github: 'GitHub प्रोफ़ाइल',
  website: 'व्यक्तिगत वेबसाइट',
  businessInterests: 'व्यावसायिक रुचियां',
  saveProfile: 'प्रोफ़ाइल सहेजें',

  skillsTitle: 'कौशल विकास',
  skillsSubtitle: 'AI-व्यक्तिगत सीखने के रास्ते, पाठ्यक्रम, क्विज़ और व्यावहारिक असाइनमेंट।',
  myCourses: 'मेरे पाठ्यक्रम',
  browseAll: 'सभी पाठ्यक्रम ब्राउज़ करें',
  continueLesson: 'पाठ जारी रखें',
  startCourse: 'पाठ्यक्रम शुरू करें',
  progress: 'प्रगति',
  lessonOf: 'पाठ',
  quizAvailable: 'क्विज़ उपलब्ध',
  assignmentDue: 'असाइनमेंट की अंतिम तिथि',
  roadmapTitle: 'आपका सीखने का रोडमैप',
  aiSkillAssessment: 'AI कौशल मूल्यांकन',
  takeAssessment: 'मूल्यांकन लें',
  yourLevel: 'आपका स्तर',
  nextSkill: 'अनुशंसित अगला कौशल',

  portfolioTitle: 'मेरा पोर्टफोलियो',
  portfolioSubtitle: 'ग्राहकों, मेंटर्स और व्यवसायों को आकर्षित करने के लिए अपना काम और कौशल प्रदर्शित करें।',
  addProject: 'प्रोजेक्ट जोड़ें',
  myProjects: 'मेरे प्रोजेक्ट',
  myAchievements: 'उपलब्धियां',
  myExperience: 'अनुभव',
  createPortfolio: 'पोर्टफोलियो वेबसाइट बनाएं',
  aiImproveDesc: 'AI विवरण सुधारें',
  visitPortfolio: 'पोर्टफोलियो देखें',
  projectTitle: 'प्रोजेक्ट शीर्षक',
  projectDesc: 'प्रोजेक्ट विवरण',

  marketplaceTitle: 'मेरा मार्केटप्लेस',
  marketplaceSubtitle: 'अपने उत्पाद, सेवाएं, वर्कशॉप और डिजिटल आइटम बेचें। AI आपकी लिस्टिंग स्वचालित रूप से सुधारता है।',
  addProduct: 'उत्पाद / सेवा जोड़ें',
  myProducts: 'मेरे उत्पाद',
  myOrders: 'मेरे ऑर्डर',
  myEarnings: 'मेरी कमाई',
  productName: 'उत्पाद का नाम',
  productPrice: 'मूल्य (₹)',
  productCategory: 'श्रेणी',
  productDesc: 'उत्पाद विवरण',
  aiImproveListings: 'AI लिस्टिंग सुधारें',
  totalSales: 'कुल बिक्री',
  pendingPayout: 'लंबित भुगतान',
  customerReviews: 'ग्राहक समीक्षाएं',

  mentorsTitle: 'मेंटर खोजें',
  mentorsSubtitle: 'सत्यापित मेंटर्स से जुड़ें, 1-ऑन-1 सत्र बुक करें, लाइव वर्कशॉप में शामिल हों।',
  searchMentors: 'मेंटर खोजें',
  filterBySkill: 'कौशल द्वारा फ़िल्टर करें',
  bookSession: 'सत्र बुक करें',
  joinLiveSession: 'लाइव सत्र में शामिल हों',
  chatMentor: 'मेंटर से चैट करें',
  rateMentor: 'मेंटर को रेट करें',
  aiRecommended: 'AI अनुशंसित',
  sessionBooked: 'सत्र बुक हो गया!',
  perSession: 'प्रति सत्र',
  rating: 'रेटिंग',
  reviews: 'समीक्षाएं',
  expertise: 'विशेषज्ञता',

  opportunityTitle: 'AI अवसर खोजक',
  opportunitySubtitle: 'AI हजारों अवसरों को स्कैन करता है और आपकी प्रोफ़ाइल के लिए सर्वोत्तम मिलान की अनुशंसा करता है।',
  internships: 'इंटर्नशिप',
  jobs: 'नौकरियां',
  freelance: 'फ्रीलांस प्रोजेक्ट',
  competitions: 'प्रतियोगिताएं',
  hackathons: 'हैकाथॉन',
  investors: 'निवेशक',
  localBusiness: 'स्थानीय व्यवसाय',
  aiPersonalized: 'AI आपके लिए व्यक्तिगत',
  applyForOpportunity: 'आवेदन करें',
  deadline: 'अंतिम तिथि',
  stipend: 'वजीफा / बजट',

  schemesTitle: 'सरकारी योजनाएं',
  schemesSubtitle: 'AI आपकी प्रोफ़ाइल के आधार पर पात्र सरकारी योजनाओं, ऋणों और सब्सिडी से मिलान करता है।',
  eligibility: 'पात्रता मानदंड',
  requiredDocs: 'आवश्यक दस्तावेज़',
  applyScheme: 'योजना के लिए आवेदन करें',
  schemeAmount: 'योजना राशि',
  schemeCategory: 'श्रेणी',
  aiSchemeMatch: 'AI से मिलान की गई योजनाएं',
  mudraSchemeName: 'पीएम मुद्रा योजना (शिशु)',
  mudraSchemeDesc: 'छोटे व्यवसायों के लिए ₹50,000 तक बिना गारंटी माइक्रो लोन।',
  pmegpSchemeName: 'PMEGP (रोजगार सृजन)',
  pmegpSchemeDesc: 'विनिर्माण और सेवा व्यवसायों के लिए 35% तक पूंजी सब्सिडी।',
  standupSchemeName: 'स्टैंड-अप इंडिया योजना',
  standupSchemeDesc: 'SC/ST और महिला उद्यमियों के लिए ₹10 लाख से ₹1 करोड़ तक लोन।',

  fundingTitle: 'फंडिंग और निवेश',
  fundingSubtitle: 'AI आपके व्यवसाय चरण और लक्ष्यों के आधार पर सही फंडिंग विकल्पों की अनुशंसा करता है।',
  loans: 'बैंक ऋण',
  incubators: 'इनक्यूबेटर',
  accelerators: 'एक्सेलरेटर',
  grants: 'अनुदान',
  angelInvestors: 'एंजेल निवेशक',
  vcFunds: 'VC फंड',
  checkEligibility: 'पात्रता जांचें',
  applyFunding: 'फंडिंग के लिए आवेदन करें',
  fundingAmount: 'फंडिंग रेंज',

  certificatesTitle: 'मेरे प्रमाण पत्र',
  certificatesSubtitle: 'अपने अर्जित कौशल प्रमाण पत्र डाउनलोड करें, साझा करें और सत्यापित करें।',
  downloadCert: 'PDF डाउनलोड करें',
  shareCert: 'प्रमाण पत्र साझा करें',
  verifyCert: 'प्रमाण पत्र सत्यापित करें',
  issuedBy: 'द्वारा जारी',
  issuedOn: 'जारी तिथि',
  certScore: 'स्कोर',
  certValid: 'वैध तक',
  noCerts: 'अभी तक कोई प्रमाण पत्र नहीं। अपना पहला प्रमाण पत्र अर्जित करने के लिए कोर्स पूरा करें।',

  communityTitle: 'कम्युनिटी',
  communitySubtitle: 'साथी शिक्षार्थियों, मेंटर्स और व्यवसायों के साथ जुड़ें, सहयोग करें और बढ़ें।',
  createPost: 'पोस्ट बनाएं',
  askQuestion: 'प्रश्न पूछें',
  shareProject: 'प्रोजेक्ट साझा करें',
  followMentor: 'मेंटर को फॉलो करें',
  followBusiness: 'बिजनेस को फॉलो करें',
  likePost: 'लाइक करें',
  commentPost: 'टिप्पणी करें',
  trending: 'ट्रेंडिंग',
  latestPosts: 'नवीनतम पोस्ट',
  yourFeed: 'आपकी फ़ीड',

  notificationsTitle: 'सूचनाएं',
  markAllRead: 'सभी को पढ़ा हुआ चिह्नित करें',
  noNotifications: 'कोई नई सूचना नहीं',
  newMentor: 'आपके लिए नई मेंटर अनुशंसा',
  newOrder: 'नया ऑर्डर प्राप्त हुआ',
  schemeMatch: 'नई सरकारी योजना आपकी प्रोफ़ाइल से मेल खाती है',
  courseComplete: 'कोर्स पूरा हुआ! प्रमाण पत्र तैयार है',
  certEarned: 'नया प्रमाण पत्र अर्जित किया',

  settingsTitle: 'सेटिंग्स',
  languageSettings: 'भाषा सेटिंग्स',
  chooseLanguage: 'भाषा चुनें',
  themeSettings: 'थीम सेटिंग्स',
  darkMode: 'डार्क मोड',
  lightMode: 'लाइट मोड',
  passwordSettings: 'पासवर्ड सेटिंग्स',
  changePassword: 'पासवर्ड बदलें',
  notificationSettings: 'सूचना प्राथमिकताएं',
  privacySettings: 'गोपनीयता सेटिंग्स',
  deleteAccount: 'खाता हटाएं',
  saveSettings: 'सेटिंग्स सहेजें',

  voiceGreeting: 'नमस्ते! मैं आपका AI बिजनेस असिस्टेंट हूं। आज मैं आपकी कैसे मदद कर सकता हूं?',
  voiceListening: 'सुन रहा हूं... अभी बोलें!',
  voiceProcessing: 'आपकी command प्रोसेस हो रही है...',
  voiceCommandNav: 'यहाँ जा रहे हैं',
};

// Compact packs for remaining 7 languages (key fields only, extends en for missing)
const te: Partial<LearnerTranslationPack> = {
  sidebarDashboard: 'డాష్‌బోర్డ్', sidebarProfile: 'నా ప్రొఫైల్', sidebarAIAssistant: 'AI వ్యాపార సహాయకుడు',
  sidebarSkills: 'నైపుణ్య అభివృద్ధి', sidebarPortfolio: 'నా పోర్ట్‌ఫోలియో', sidebarMarketplace: 'నా మార్కెట్‌ప్లేస్',
  sidebarMentors: 'మెంటార్లు', sidebarOpportunity: 'AI అవకాశ కనుగొనేది', sidebarSchemes: 'ప్రభుత్వ పథకాలు',
  sidebarFunding: 'నిధులు', sidebarCertificates: 'సర్టిఫికెట్లు', sidebarCommunity: 'కమ్యూనిటీ',
  sidebarNotifications: 'నోటిఫికేషన్లు', sidebarSettings: 'సెట్టింగ్స్',
  welcomeBack: 'మళ్ళీ స్వాగతం', aiAssistantTitle: 'AI వ్యాపార సహాయకుడు',
  aiPlaceholder: '"నేను చేతితో తయారైన కొవ్వొత్తులు చేస్తాను" అని చెప్పండి...',
  voiceGreeting: 'నమస్కారం! నేను మీ AI వ్యాపార సహాయకుడను. ఈరోజు నేను మీకు ఎలా సహాయం చేయగలను?',
  voiceListening: 'వింటున్నాను... ఇప్పుడు మాట్లాడండి!',
  bookNow: 'ఇప్పుడు బుక్ చేయండి', applyNow: 'ఇప్పుడు దరఖాస్తు చేయండి', viewAll: 'అన్నీ చూడండి',
  generate: 'రూపొందించు', save: 'సేవ్ చేయి', search: 'వెతుకు', filter: 'ఫిల్టర్',
};

const kn: Partial<LearnerTranslationPack> = {
  sidebarDashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್', sidebarProfile: 'ನನ್ನ ಪ್ರೊಫೈಲ್', sidebarAIAssistant: 'AI ವ್ಯಾಪಾರ ಸಹಾಯಕ',
  sidebarSkills: 'ಕೌಶಲ್ಯ ಅಭಿವೃದ್ಧಿ', sidebarPortfolio: 'ನನ್ನ ಪೋರ್ಟ್‌ಫೋಲಿಯೊ', sidebarMarketplace: 'ನನ್ನ ಮಾರುಕಟ್ಟೆ',
  sidebarMentors: 'ಮೆಂಟರ್‌ಗಳು', sidebarOpportunity: 'AI ಅವಕಾಶ ಹುಡುಕಾಟ', sidebarSchemes: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು',
  sidebarFunding: 'ಹಣಕಾಸು', sidebarCertificates: 'ಪ್ರಮಾಣಪತ್ರಗಳು', sidebarCommunity: 'ಸಮುದಾಯ',
  sidebarNotifications: 'ಅಧಿಸೂಚನೆಗಳು', sidebarSettings: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
  welcomeBack: 'ಮತ್ತೆ ಸ್ವಾಗತ', aiAssistantTitle: 'AI ವ್ಯಾಪಾರ ಸಹಾಯಕ',
  aiPlaceholder: '"ನಾನು ಕೈಮಾಡಿದ ಮೇಣದ ಬತ್ತಿಗಳನ್ನು ಮಾಡುತ್ತೇನೆ" ಎಂದು ಹೇಳಿ...',
  voiceGreeting: 'ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ AI ವ್ಯಾಪಾರ ಸಹಾಯಕ. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',
  voiceListening: 'ಆಲಿಸುತ್ತಿದ್ದೇನೆ... ಈಗ ಮಾತನಾಡಿ!',
  bookNow: 'ಈಗ ಬುಕ್ ಮಾಡಿ', applyNow: 'ಈಗ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ', viewAll: 'ಎಲ್ಲವನ್ನೂ ನೋಡಿ',
  generate: 'ರಚಿಸಿ', save: 'ಉಳಿಸಿ', search: 'ಹುಡುಕಿ', filter: 'ಫಿಲ್ಟರ್',
};

const ml: Partial<LearnerTranslationPack> = {
  sidebarDashboard: 'ഡാഷ്ബോർഡ്', sidebarProfile: 'എന്റെ പ്രൊഫൈൽ', sidebarAIAssistant: 'AI ബിസിനസ്സ് അസിസ്റ്റന്റ്',
  sidebarSkills: 'നൈപുണ്യ വികസനം', sidebarPortfolio: 'എന്റെ പോർട്ട്‌ഫോളിയോ', sidebarMarketplace: 'എന്റെ മാർക്കറ്റ്',
  sidebarMentors: 'മെന്ററുകൾ', sidebarOpportunity: 'AI അവസര കണ്ടെത്തൽ', sidebarSchemes: 'സർക്കാർ പദ്ധതികൾ',
  sidebarFunding: 'ഫണ്ടിംഗ്', sidebarCertificates: 'സർട്ടിഫിക്കറ്റുകൾ', sidebarCommunity: 'കമ്മ്യൂണിറ്റി',
  sidebarNotifications: 'അറിയിപ്പുകൾ', sidebarSettings: 'ക്രമീകരണങ്ങൾ',
  welcomeBack: 'തിരിച്ചു സ്വാഗതം', aiAssistantTitle: 'AI ബിസിനസ്സ് അസിസ്റ്റന്റ്',
  aiPlaceholder: '"ഞാൻ കൈകൊണ്ട് മൊമ്പ തൈൽ ഉണ്ടാക്കുന്നു" എന്ന് പറയൂ...',
  voiceGreeting: 'ഹലോ! ഞാൻ നിങ്ങളുടെ AI ബിസിനസ്സ് അസിസ്റ്റന്റ് ആണ്. ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കാൻ കഴിയും?',
  voiceListening: 'കേൾക്കുന്നു... ഇപ്പോൾ സംസാരിക്കൂ!',
  bookNow: 'ഇപ്പോൾ ബുക്ക് ചെയ്യൂ', applyNow: 'ഇപ്പോൾ അപേക്ഷിക്കൂ', viewAll: 'എല്ലാം കാണൂ',
  generate: 'സൃഷ്ടിക്കുക', save: 'സേവ് ചെയ്യുക', search: 'തിരയുക', filter: 'ഫിൽറ്റർ',
};

const mr: Partial<LearnerTranslationPack> = {
  sidebarDashboard: 'डॅशबोर्ड', sidebarProfile: 'माझी प्रोफाइल', sidebarAIAssistant: 'AI व्यवसाय सहाय्यक',
  sidebarSkills: 'कौशल्य विकास', sidebarPortfolio: 'माझे पोर्टफोलियो', sidebarMarketplace: 'माझी बाजारपेठ',
  sidebarMentors: 'मार्गदर्शक', sidebarOpportunity: 'AI संधी शोधक', sidebarSchemes: 'सरकारी योजना',
  sidebarFunding: 'निधी', sidebarCertificates: 'प्रमाणपत्रे', sidebarCommunity: 'समुदाय',
  sidebarNotifications: 'सूचना', sidebarSettings: 'सेटिंग्ज',
  welcomeBack: 'पुन्हा स्वागत आहे', aiAssistantTitle: 'AI व्यवसाय सहाय्यक',
  aiPlaceholder: '"मी हस्तनिर्मित मेणबत्त्या बनवतो" असे सांगा...',
  voiceGreeting: 'नमस्कार! मी तुमचा AI व्यवसाय सहाय्यक आहे. आज मी तुम्हाला कशी मदत करू?',
  voiceListening: 'ऐकतो आहे... आता बोला!',
  bookNow: 'आत्ता बुक करा', applyNow: 'आत्ता अर्ज करा', viewAll: 'सर्व पहा',
  generate: 'तयार करा', save: 'जतन करा', search: 'शोधा', filter: 'फिल्टर',
};

const bn: Partial<LearnerTranslationPack> = {
  sidebarDashboard: 'ড্যাশবোর্ড', sidebarProfile: 'আমার প্রোফাইল', sidebarAIAssistant: 'AI ব্যবসায়িক সহকারী',
  sidebarSkills: 'দক্ষতা উন্নয়ন', sidebarPortfolio: 'আমার পোর্টফোলিও', sidebarMarketplace: 'আমার বাজার',
  sidebarMentors: 'মেন্টর', sidebarOpportunity: 'AI সুযোগ সন্ধানী', sidebarSchemes: 'সরকারি প্রকল্প',
  sidebarFunding: 'অর্থায়ন', sidebarCertificates: 'সার্টিফিকেট', sidebarCommunity: 'কমিউনিটি',
  sidebarNotifications: 'বিজ্ঞপ্তি', sidebarSettings: 'সেটিংস',
  welcomeBack: 'আবার স্বাগত', aiAssistantTitle: 'AI ব্যবসায়িক সহকারী',
  aiPlaceholder: '"আমি হাতে তৈরি মোমবাতি বানাই" বলুন...',
  voiceGreeting: 'হ্যালো! আমি আপনার AI ব্যবসায়িক সহকারী। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?',
  voiceListening: 'শুনছি... এখন কথা বলুন!',
  bookNow: 'এখন বুক করুন', applyNow: 'এখন আবেদন করুন', viewAll: 'সব দেখুন',
  generate: 'তৈরি করুন', save: 'সংরক্ষণ করুন', search: 'খুঁজুন', filter: 'ফিল্টার',
};

const gu: Partial<LearnerTranslationPack> = {
  sidebarDashboard: 'ડેશબોર્ડ', sidebarProfile: 'મારી પ્રોફાઇલ', sidebarAIAssistant: 'AI વ્યવસાય સહાયક',
  sidebarSkills: 'કૌશલ્ય વિકાસ', sidebarPortfolio: 'મારું પોર્ટફોલિયો', sidebarMarketplace: 'મારું માર્કેટ',
  sidebarMentors: 'મેન્ટર', sidebarOpportunity: 'AI તક શોધક', sidebarSchemes: 'સરકારી યોજનાઓ',
  sidebarFunding: 'ભંડોળ', sidebarCertificates: 'પ્રમાણપત્રો', sidebarCommunity: 'સમુદાય',
  sidebarNotifications: 'સૂચનાઓ', sidebarSettings: 'સેટિંગ',
  welcomeBack: 'ફરી સ્વાગત', aiAssistantTitle: 'AI વ્યવસાય સહાયક',
  aiPlaceholder: '"હું હાથ બનાવટ મીણબત્તી બનાવું છું" એ કહો...',
  voiceGreeting: 'નમસ્તે! હું તમારો AI વ્યવસાય સહાયક છું. આજે હું તમને કેવી રીતે મદદ કરી શકું?',
  voiceListening: 'સાંભળી રહ્યો છું... હવે બોલો!',
  bookNow: 'હવે બુક કરો', applyNow: 'હવે અરજી કરો', viewAll: 'બધું જુઓ',
  generate: 'બનાવો', save: 'સાચવો', search: 'શોધો', filter: 'ફિલ્ટર',
};

const ur: Partial<LearnerTranslationPack> = {
  sidebarDashboard: 'ڈیش بورڈ', sidebarProfile: 'میری پروفائل', sidebarAIAssistant: 'AI کاروباری معاون',
  sidebarSkills: 'مہارت کی ترقی', sidebarPortfolio: 'میرا پورٹ فولیو', sidebarMarketplace: 'میری مارکیٹ',
  sidebarMentors: 'رہنما', sidebarOpportunity: 'AI موقع تلاش', sidebarSchemes: 'سرکاری اسکیمیں',
  sidebarFunding: 'فنڈنگ', sidebarCertificates: 'سرٹیفکیٹس', sidebarCommunity: 'کمیونٹی',
  sidebarNotifications: 'اطلاعات', sidebarSettings: 'ترتیبات',
  welcomeBack: 'دوبارہ خوش آمدید', aiAssistantTitle: 'AI کاروباری معاون',
  aiPlaceholder: '"میں ہاتھ سے بنی موم بتیاں بناتا ہوں" کہیں...',
  voiceGreeting: 'السلام علیکم! میں آپ کا AI کاروباری معاون ہوں۔ آج میں آپ کی کیسے مدد کر سکتا ہوں؟',
  voiceListening: 'سن رہا ہوں... ابھی بولیں!',
  bookNow: 'ابھی بک کریں', applyNow: 'ابھی درخواست دیں', viewAll: 'سب دیکھیں',
  generate: 'بنائیں', save: 'محفوظ کریں', search: 'تلاش کریں', filter: 'فلٹر',
};

const langPacks: Record<string, LearnerTranslationPack> = {
  en, ta, hi,
  te: { ...en, ...te } as LearnerTranslationPack,
  kn: { ...en, ...kn } as LearnerTranslationPack,
  ml: { ...en, ...ml } as LearnerTranslationPack,
  mr: { ...en, ...mr } as LearnerTranslationPack,
  bn: { ...en, ...bn } as LearnerTranslationPack,
  gu: { ...en, ...gu } as LearnerTranslationPack,
  ur: { ...en, ...ur } as LearnerTranslationPack,
};

export const getLearnerTranslation = (langCode: string): LearnerTranslationPack => {
  const code = (langCode || 'en').slice(0, 2);
  return langPacks[code] || langPacks['en'];
};
