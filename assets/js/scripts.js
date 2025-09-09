// Optional tiny emphasis toggle: finance vs research
// Reorders two sections if present. Progressive enhancement only.
(function() {
  var emphasis = window.SITE_EMPHASIS || null; // 'finance' | 'research'
  if (!emphasis) return;

  var container = document.querySelector('main');
  if (!container) return;

  var experience = document.querySelector('#experience, [data-section="experience"]');
  var technical = document.querySelector('#technical, [data-section="technical"]');
  if (!experience || !technical) return;

  if (emphasis === 'finance') {
    if (experience.compareDocumentPosition(technical) & Node.DOCUMENT_POSITION_FOLLOWING) {
      container.insertBefore(experience, technical);
    }
  } else if (emphasis === 'research') {
    if (technical.compareDocumentPosition(experience) & Node.DOCUMENT_POSITION_FOLLOWING) {
      container.insertBefore(technical, experience);
    }
  }
})();

