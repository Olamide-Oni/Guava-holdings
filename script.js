
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the catalog comes into view
            if (entry.isIntersecting) {
                // Add the 'in-view' class to trigger the animation
                entry.target.classList.add('in-view');
                /** Once the animation is triggered, no need to observe this element anymore
                observer.unobserve(entry.target); */
            }  else {
                // Remove the 'in-view' class when the element leaves the viewport
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        // Options for the observer: trigger when 50% of the element is visible
        threshold: 0.10
    });

    // Target each catalog div
    const catalogs = document.querySelectorAll('.about-us-catalog div');
    catalogs.forEach(catalog => {
        observer.observe(catalog);
    });



    
    // Create a new Intersection Observer instance for the 'our-investment' section
    const investmentObserver = new IntersectionObserver((entries, investmentObserver) => {
        entries.forEach(entry => {
            // If the element comes into view
            if (entry.isIntersecting) {
                // Add the 'in-view' class to trigger the animation
                entry.target.classList.add('in-view');
                /**  Once the animation is triggered, no need to observe this element anymore
                investmentObserver.unobserve(entry.target); **/
            }  else {
                // Remove the 'in-view' class when the element leaves the viewport
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        // Options: trigger when 20% of the element is in view
        threshold: 0.1 // Adjust this value for earlier/later triggering
    });

    // Target all elements with the class 'fade-in'
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        investmentObserver.observe(element);
    });



    // Create a new Intersection Observer for the 'news-contact' section
    const newsContactObserver = new IntersectionObserver((entries, newsContactObserver) => {
        entries.forEach(entry => {
            const target = entry.target;
            const isFullyInView = entry.isIntersecting && entry.intersectionRatio > 0.7; // Element is 70% or more in view

            if (isFullyInView) {
                // Add the 'in-view' class to trigger the animation when 70% or more of the element is visible
                target.classList.add('in-view');
            } else {
                // Remove the 'in-view' class if less than 70% of the element is visible
                target.classList.remove('in-view');
            }
        });
    }, {
        // Options: trigger when 70% of the element is in view
        threshold: 0.7
    });

    // Target all elements with the class 'fade-in' within the news-contact section
    const fadenewsElements = document.querySelectorAll('.news .fade-in');
    fadeElements.forEach(element => {
        newsContactObserver.observe(element);
    });




    





