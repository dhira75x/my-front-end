<template>
  <div class="help-center animate__animated animate__fadeIn">
    <!-- Header Section -->
    <header class="header animate__animated animate__fadeInDown">
      <div class="container">
        <h1 class="page-title">Help Center</h1>
        <p class="page-description">Find answers to your questions or get in touch with our support team</p>
      </div>
    </header>

    <!-- Search Section -->
    <div class="search-section">
      <div class="container">
        <div class="search-container">
          <div class="search-input-wrapper">
            <input
              v-model="searchQuery"
              @input="search"
              type="text"
              placeholder="What can we help you with today?"
              class="search-input"
            />
            <button class="search-button">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.875 17.25C13.2242 17.25 16.75 13.7242 16.75 9.375C16.75 5.02576 13.2242 1.5 8.875 1.5C4.52576 1.5 1 5.02576 1 9.375C1 13.7242 4.52576 17.25 8.875 17.25Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.4434 14.9453L18.9996 19.5016" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <div class="popular-topics">
            <span class="popular-label">Popular topics:</span>
            <a href="#" class="popular-topic">Delivery</a>
            <a href="#" class="popular-topic">Returns</a>
            <a href="#" class="popular-topic">Payment</a>
            <a href="#" class="popular-topic">Account</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Help Categories Section -->
    <div class="categories-section animate__animated animate__fadeIn">
      <div class="container">
        <h2 class="section-title">Browse Help Categories</h2>
        
        <div class="categories-grid">
          <Card 
            title="Delivery Service" 
            icon="📦"
            description="Track orders, delivery times, and shipping options"
            class="card-delivery"
          />
          <Card 
            title="Returns" 
            icon="↩️"
            description="Learn about our return policy and process"
            class="card-returns"
          />
          <Card 
            title="Orders & Cancellations" 
            icon="📋"
            description="Manage your orders and request cancellations"
            class="card-orders"
          />
          <Card 
            title="Collection Refunds" 
            icon="💰"
            description="Information about refunds and collection points"
            class="card-refunds"
          />
          <Card 
            title="Promo & Payments" 
            icon="💳"
            description="Payment methods, promotions, and billing"
            class="card-payments"
          />
          <Card 
            title="Vouchers & Coupon" 
            icon="🎟️"
            description="How to use and manage your discount codes"
            class="card-vouchers"
          />
          <Card 
            title="Product & Stock" 
            icon="🛒"
            description="Product availability, sizes, and information"
            class="card-products"
          />
          <Card 
            title="Data & Privacy" 
            icon="🔒"
            description="How we protect your data and privacy"
            class="card-privacy"
          />
        </div>
      </div>
    </div>

    <!-- Additional Help Section -->
    <div class="additional-help animate__animated animate__fadeIn">
      <div class="container">
        <div class="help-cards">
          <div class="help-card contact-card">
            <div class="help-card-icon">💬</div>
            <h3 class="help-card-title">Still need help?</h3>
            <p class="help-card-description">Our support team is ready to assist you</p>
            <button class="help-card-button">Contact Support</button>
          </div>
          
          <div class="help-card faq-card">
            <div class="help-card-icon">❓</div>
            <h3 class="help-card-title">Frequently Asked Questions</h3>
            <p class="help-card-description">Find quick answers to common questions</p>
            <button class="help-card-button">View FAQs</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Card from "../pages/help/card.vue";

const searchQuery = ref("");

const search = () => {
  console.log(`Search query: ${searchQuery.value}`);
  // Implement search functionality
};
</script>

<style scoped>
/* Variables */
:root {
  --primary-color: #3b82f6;
  --primary-dark: #2563eb;
  --secondary-color: #6366f1;
  --accent-color: #8b5cf6;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --bg-light: #f8fafc;
  --bg-white: #ffffff;
  --border-color: #e2e8f0;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.05);
  --transition: all 0.3s ease;
}

/* Global Styles */
.help-center {
  min-height: 100vh;
  background-color: var(--bg-light);
  font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
  color: var(--text-primary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Header Styles */
.header {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 4rem 0 3rem;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
}

.page-description {
  font-size: 1.125rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* Search Section */
.search-section {
  background-color: var(--bg-white);
  padding: 2rem 0;
  box-shadow: var(--shadow-sm);
  position: relative;
  z-index: 10;
}

.search-container {
  max-width: 700px;
  margin: 0 auto;
}

.search-input-wrapper {
  position: relative;
  margin-bottom: 1.5rem;
}

.search-input {
  width: 100%;
  padding: 1rem 3.5rem 1rem 1.5rem;
  font-size: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background-color: var(--bg-white);
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.search-button {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
}

.search-button:hover {
  background-color: var(--primary-dark);
}

.popular-topics {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.popular-label {
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
}

.popular-topic {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  background-color: rgba(59, 130, 246, 0.1);
  transition: var(--transition);
}

.popular-topic:hover {
  background-color: rgba(59, 130, 246, 0.2);
}

/* Categories Section */
.categories-section {
  padding: 4rem 0;
}

.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  text-align: center;
  color: var(--text-primary);
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* Card Styles - Base */
.card-delivery {
  background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
  border-left: 4px solid #0ea5e9;
}

.card-returns {
  background: linear-gradient(135deg, #fef2f2, #fee2e2);
  border-left: 4px solid #ef4444;
}

.card-orders {
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
  border-left: 4px solid #22c55e;
}

.card-refunds {
  background: linear-gradient(135deg, #f5f3ff, #ede9fe);
  border-left: 4px solid #8b5cf6;
}

.card-payments {
  background: linear-gradient(135deg, #fffbeb, #fef3c7);
  border-left: 4px solid #f59e0b;
}

.card-vouchers {
  background: linear-gradient(135deg, #f7fee7, #ecfccb);
  border-left: 4px solid #84cc16;
}

.card-products {
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
  border-left: 4px solid #3b82f6;
}

.card-privacy {
  background: linear-gradient(135deg, #fdf2f8, #fce7f3);
  border-left: 4px solid #ec4899;
}

/* Additional Help Section */
.additional-help {
  background-color: var(--bg-white);
  padding: 4rem 0;
}

.help-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.help-card {
  background-color: var(--bg-white);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: var(--shadow-md);
  text-align: center;
  transition: var(--transition);
}

.help-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.help-card-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.help-card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.help-card-description {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.help-card-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.help-card-button:hover {
  background-color: var(--primary-dark);
}

.contact-card .help-card-button {
  background-color: var(--primary-color);
}

.faq-card .help-card-button {
  background-color: var(--secondary-color);
}

/* Responsive Styles */
@media (max-width: 768px) {
  .header {
    padding: 3rem 0 2rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .page-description {
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .categories-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1rem;
  }
  
  .help-cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .popular-topics {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 0.5rem;
    -webkit-overflow-scrolling: touch;
  }
  
  .popular-topics::-webkit-scrollbar {
    height: 4px;
  }
  
  .popular-topics::-webkit-scrollbar-thumb {
    background-color: #cbd5e1;
    border-radius: 2px;
  }
}
</style>