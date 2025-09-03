document.addEventListener('DOMContentLoaded', function () {
    var openAiAssistantBtn = document.getElementById('openAiAssistantBtn');
    var closeAiAssistantBtn = document.getElementById('closeAiAssistantBtn');
    var aiAssistantSidebar = document.getElementById('aiAssistantSidebar');
    if (openAiAssistantBtn) {
        openAiAssistantBtn.addEventListener('click', () => {
            if (aiAssistantSidebar) {
                aiAssistantSidebar.style.transform = 'translateX(0)';
            }
        });
    }
    
    if (closeAiAssistantBtn) {
        closeAiAssistantBtn.addEventListener('click', () => {
            if (aiAssistantSidebar) {
                aiAssistantSidebar.style.transform = 'translateX(100%)';
            }
        });
    }
});