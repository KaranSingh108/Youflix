
    // Get all FAQ buttons
    const faqBtns = document.querySelectorAll('.faq-btn');

    // Add click event listener to each button
    faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Toggle the visibility of the next element, which is the FAQ box
            const faqBox = btn.nextElementSibling;
            faqBox.classList.toggle('active');
           btn.querySelectorAll('span').forEach(span => {
            span.classList.toggle('ative-span');
        });
           
            
        });
        

    });
