document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize the Animate on Scroll (AOS) library
  AOS.init({
    duration: 1200,                // Slower duration for a more elegant effect
    once: true,                    // Animation happens only once
    offset: 100,                   // Trigger animation a little sooner
    easing: 'ease-in-out-cubic'    // A smooth, graceful easing function
  });
  

  // --- START: NEW TAB FUNCTIONALITY ---
  const tabs = document.querySelectorAll('[role="tab"]');
  const tabPanels = document.querySelectorAll('[role="tabpanel"]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // 1. Deactivate all tabs and hide all panels
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(p => {
        p.classList.add('hidden');
      });

      // 2. Activate the clicked tab
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // 3. Show the corresponding panel
      const panelId = tab.getAttribute('aria-controls');
      const correspondingPanel = document.getElementById(panelId);
      if (correspondingPanel) {
        correspondingPanel.classList.remove('hidden');
      }
    });
  });
  // --- END: NEW TAB FUNCTIONALITY ---

});
