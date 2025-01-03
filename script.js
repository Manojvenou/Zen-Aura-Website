// Simple JavaScript example: Smooth scroll to anchor links﻿
document.querySelectorAll('a[href^="#"]').forEach(anchor => {﻿
  anchor.addEventListener('click', function (e) {﻿
    e.preventDefault();﻿
    const targetID = this.getAttribute('href');﻿
    const targetElement = document.querySelector(targetID);﻿
    window.scrollTo({﻿
      top: targetElement.offsetTop,﻿
      behavior: 'smooth'﻿
    });﻿
  });﻿
}); 