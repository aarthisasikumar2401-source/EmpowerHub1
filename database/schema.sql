-- EMPOWER HUB - Supabase PostgreSQL Schema DDL
-- Platform: From Talent to Opportunity, From Opportunity to Empowerment.

-- Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. USERS TABLE
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL CHECK (role IN ('learner', 'mentor', 'business', 'admin')),
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. PROFILES TABLE
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    country VARCHAR(100) DEFAULT 'India',
    state VARCHAR(100),
    city VARCHAR(100),
    preferred_language VARCHAR(50) DEFAULT 'en',
    education VARCHAR(255),
    occupation VARCHAR(255),
    experience VARCHAR(255),
    bio TEXT,
    profile_picture TEXT,
    opportunity_score INT DEFAULT 78,
    business_readiness_score INT DEFAULT 65,
    financial_readiness_score INT DEFAULT 72,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. SKILLS TABLE
CREATE TABLE IF NOT EXISTS skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) UNIQUE NOT NULL,
    category VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. USER SKILLS TABLE
CREATE TABLE IF NOT EXISTS user_skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    skill_id UUID REFERENCES skills(id) ON DELETE CASCADE,
    proficiency_level VARCHAR(50) DEFAULT 'Intermediate',
    is_verified BOOLEAN DEFAULT FALSE,
    UNIQUE(user_id, skill_id)
);

-- 5. MENTOR PROFILES TABLE
CREATE TABLE IF NOT EXISTS mentor_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    expertise TEXT[],
    hourly_rate DECIMAL(10,2) DEFAULT 499.00,
    rating DECIMAL(3,2) DEFAULT 4.9,
    reviews_count INT DEFAULT 42,
    students_count INT DEFAULT 185,
    is_verified BOOLEAN DEFAULT TRUE,
    available_slots JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. BUSINESS PROFILES TABLE
CREATE TABLE IF NOT EXISTS business_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    company_name VARCHAR(255) NOT NULL,
    industry VARCHAR(100),
    company_size VARCHAR(50),
    website VARCHAR(255),
    gst_number VARCHAR(100),
    is_verified BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. PRODUCTS TABLE (Marketplace)
CREATE TABLE IF NOT EXISTS products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    seller_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    discount_price DECIMAL(10,2),
    stock INT DEFAULT 10,
    images TEXT[],
    tags TEXT[],
    rating DECIMAL(3,2) DEFAULT 4.8,
    reviews_count INT DEFAULT 12,
    is_approved BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. SERVICES TABLE (Marketplace)
CREATE TABLE IF NOT EXISTS services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    provider_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    duration VARCHAR(100),
    location_type VARCHAR(50) DEFAULT 'Online',
    rating DECIMAL(3,2) DEFAULT 4.9,
    reviews_count INT DEFAULT 24,
    is_approved BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 9. COURSES TABLE
CREATE TABLE IF NOT EXISTS courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    instructor_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    level VARCHAR(50) DEFAULT 'Beginner',
    duration VARCHAR(100),
    modules_count INT DEFAULT 8,
    is_ai_generated BOOLEAN DEFAULT FALSE,
    price DECIMAL(10,2) DEFAULT 0.00,
    thumbnail TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 10. LEARNING PROGRESS TABLE
CREATE TABLE IF NOT EXISTS learning_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    progress_percentage INT DEFAULT 0,
    completed_modules INT DEFAULT 0,
    quiz_scores JSONB,
    certificate_issued BOOLEAN DEFAULT FALSE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 11. NOTIFICATIONS TABLE
CREATE TABLE IF NOT EXISTS notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    type VARCHAR(50) DEFAULT 'info',
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 12. WALLETS TABLE
CREATE TABLE IF NOT EXISTS wallets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    balance DECIMAL(10,2) DEFAULT 2500.00,
    currency VARCHAR(10) DEFAULT 'INR',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 13. PAYMENTS TABLE
CREATE TABLE IF NOT EXISTS payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'INR',
    payment_method VARCHAR(50) DEFAULT 'Razorpay UPI',
    transaction_id VARCHAR(255) UNIQUE NOT NULL,
    status VARCHAR(50) DEFAULT 'completed',
    type VARCHAR(50) DEFAULT 'purchase',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 14. ORDERS TABLE
CREATE TABLE IF NOT EXISTS orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    buyer_id UUID REFERENCES users(id) ON DELETE CASCADE,
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'Completed',
    shipping_address TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 15. BOOKINGS TABLE (Mentor Sessions)
CREATE TABLE IF NOT EXISTS bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    learner_id UUID REFERENCES users(id) ON DELETE CASCADE,
    mentor_id UUID REFERENCES users(id) ON DELETE CASCADE,
    booking_date TIMESTAMP WITH TIME ZONE NOT NULL,
    slot_time VARCHAR(100) NOT NULL,
    status VARCHAR(50) DEFAULT 'Confirmed',
    meeting_link TEXT,
    amount DECIMAL(10,2) DEFAULT 499.00,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 16. REVIEWS TABLE
CREATE TABLE IF NOT EXISTS reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    reviewer_id UUID REFERENCES users(id) ON DELETE CASCADE,
    target_type VARCHAR(50) NOT NULL, -- 'mentor', 'product', 'service', 'course'
    target_id UUID NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 17. GOVERNMENT SCHEMES TABLE
CREATE TABLE IF NOT EXISTS government_schemes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    ministry VARCHAR(255),
    subsidy_amount VARCHAR(100),
    eligibility TEXT,
    category VARCHAR(100),
    state VARCHAR(100) DEFAULT 'All India',
    application_link TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 18. OPPORTUNITIES TABLE
CREATE TABLE IF NOT EXISTS opportunities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL, -- 'Business Idea', 'Freelance', 'Micro-Business', 'Side Hustle'
    category VARCHAR(100),
    estimated_income VARCHAR(100),
    skill_match_percentage INT DEFAULT 90,
    investment_needed VARCHAR(100) DEFAULT 'Low',
    risk_level VARCHAR(50) DEFAULT 'Low',
    description TEXT,
    required_skills TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 19. AI HISTORY TABLE
CREATE TABLE IF NOT EXISTS ai_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    module_name VARCHAR(100) NOT NULL,
    user_prompt TEXT NOT NULL,
    ai_response TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 20. MESSAGES TABLE
CREATE TABLE IF NOT EXISTS messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    sender_id UUID REFERENCES users(id) ON DELETE CASCADE,
    receiver_id UUID REFERENCES users(id) ON DELETE CASCADE,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 21. SUPPORT TICKETS TABLE
CREATE TABLE IF NOT EXISTS support_tickets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    subject VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'Open',
    priority VARCHAR(50) DEFAULT 'Medium',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Row Level Security (RLS) Policies sample
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE wallets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile" ON profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own profile" ON profiles FOR UPDATE USING (auth.uid() = user_id);
