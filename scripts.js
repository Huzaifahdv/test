const languageToggle = document.getElementById('language-toggle');
const mainHeading = document.getElementById('main-heading');
const description = document.getElementById('description');
const ctaHeading = document.getElementById('cta-heading');
const ctaDescription = document.getElementById('cta-description');

languageToggle.addEventListener('click', () => {
    if (languageToggle.textContent === 'BN') {
        // Switch to Bengali
        mainHeading.textContent = 'আপনার ব্যবসা বৃদ্ধির জন্য পেশাদার বিপণন';
        description.textContent = 'আপনি কি বিক্রি বাড়াতে চান, আরো গ্রাহক আকর্ষণ করতে চান, এবং আপনার সোশ্যাল মিডিয়া উপস্থিতি বৃদ্ধি করতে চান? আমরা আপনার প্রয়োজন অনুযায়ী বিশেষায়িত ডিজিটাল মার্কেটিং পরিষেবা প্রদান করি।';
        ctaHeading.textContent = 'এখনই আপনার অনলাইন ব্যবসা বাড়ান!';
        ctaDescription.textContent = 'পেশাদার বিপণন কৌশলগুলি পান যা আপনার অনুসারীদের সংখ্যা বাড়ায় এবং আরও গ্রাহক আকর্ষণ করে।';
        languageToggle.textContent = 'EN';
    } else {
        // Switch to English
        mainHeading.textContent = 'Boost Your Business with Professional Marketing';
        description.textContent = 'Are you looking to increase sales, attract more customers, and grow your social media presence? We offer expert digital marketing services tailored for your needs.';
        ctaHeading.textContent = 'Grow Your Online Business Now!';
        ctaDescription.textContent = 'Get professional marketing strategies that increase engagement, boost your followers, and attract more customers to your online store or page.';
        languageToggle.textContent = 'BN';
    }
});
