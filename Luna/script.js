// Add event listeners to restore scroll position on reload
window.history.scrollRestoration = 'manual';
window.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
});

// Session data for main content
const sessions = [
  ["photo/Luna MV(5).mp4"],
  ["photo/jessica007_A_fierce_Korean_idol_girl_with_pastel_blue-to-purple_ae648413-9507-4b32-927c-bb515ff5f8c9.png"],
  ["photo/Untitled design (6).png"],
  ["photo/Luna_website collage.mp4"],
  ["photo/Untitled design (7).png"],
  ["photo/backG.png"]
];

const main = document.getElementById('main-container');

let lunaVideo = null;
let hasUserScrolled = false;

// Try to play Luna MV video after user interaction
function tryPlayLunaVideo() {
  if (!hasUserScrolled && lunaVideo) {
    lunaVideo.play();
    hasUserScrolled = true;
  }
}

window.addEventListener('scroll', tryPlayLunaVideo);
window.addEventListener('click', tryPlayLunaVideo);
window.addEventListener('touchstart', tryPlayLunaVideo);

// Render each session (image or video) to the main container
sessions.forEach((items, idx) => {
  const isLast = idx === sessions.length - 1;
  const sessionDiv = document.createElement('div');
  sessionDiv.className = 'session' + (isLast ? ' last-session' : '');
  sessionDiv.style.position = 'relative';
  sessionDiv.style.width = '100vw';
  sessionDiv.style.height = '100vh';
  sessionDiv.style.overflow = 'hidden';
  sessionDiv.style.display = 'block';
  sessionDiv.style.background = '#000';
  const src = items[0];

  // Special layout for the pastel blue-to-purple image session
  if (src === 'photo/jessica007_A_fierce_Korean_idol_girl_with_pastel_blue-to-purple_ae648413-9507-4b32-927c-bb515ff5f8c9.png') {
    sessionDiv.style.position = 'relative';
    sessionDiv.style.width = '100vw';
    sessionDiv.style.height = '100vh';
    sessionDiv.style.overflow = 'hidden';
    sessionDiv.style.display = 'block';
    sessionDiv.style.background = '#000';
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.style.position = 'absolute';
    img.style.left = '0';
    img.style.top = '0';
    img.style.width = '100vw';
    img.style.height = '100vh';
    img.style.objectFit = 'fill';
    img.style.display = 'block';
    img.style.zIndex = '1';
    sessionDiv.appendChild(img);

    const rightBox = document.createElement('div');
    rightBox.style.position = 'absolute';
    rightBox.style.top = '50%';
    rightBox.style.right = '-40px';
    
    function updateRightBoxPosition() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        rightBox.style.right = '35px';
        rightBox.style.flexDirection = 'column';
        rightBox.style.alignItems = 'flex-start';
        rightBox.style.justifyContent = '';
        rightBox.style.top = '50%';
        rightBox.style.left = '';
        rightBox.style.width = '';
    rightBox.style.transform = 'translateY(-50%)';
      } else if (screenWidth >= 810 && screenWidth <= 1199) {
        rightBox.style.right = '20px';
        rightBox.style.flexDirection = 'column';
        rightBox.style.alignItems = 'flex-start';
        rightBox.style.justifyContent = '';
        rightBox.style.top = '50%';
        rightBox.style.left = '';
        rightBox.style.width = '';
        rightBox.style.transform = 'translateY(-50%)';
      } else {
        rightBox.style.right = '16px';
        rightBox.style.left = '16px';
        rightBox.style.top = '24px';
        rightBox.style.width = 'auto';
        rightBox.style.flexDirection = 'row';
        rightBox.style.alignItems = 'flex-start';
        rightBox.style.justifyContent = 'space-between';
        rightBox.style.gap = '12px';
        rightBox.style.transform = '';
      }
    }
    rightBox.style.display = 'flex';
    rightBox.style.zIndex = '20';
    updateRightBoxPosition();
    window.addEventListener('resize', updateRightBoxPosition);




    const logo = document.createElement('img');
    logo.src = 'photo/Luna_White.png';
    logo.alt = 'Luna Logo';
    logo.style.width = '150px';
    logo.style.height = '108px';
    logo.style.opacity = '1';
    logo.style.marginBottom = '30px';
    logo.style.transition = 'all 0.3s ease';
    rightBox.appendChild(logo);

    function updateLogoSizes() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        logo.style.width = '150px';
        logo.style.height = '108px';
        logo.style.marginBottom = '30px';
        logo.style.display = '';
        logo.style.verticalAlign = '';
        logo.style.marginRight = '';
      } else if (screenWidth >= 810 && screenWidth <= 1199) {
        logo.style.width = '183px';
        logo.style.height = '122px';
        logo.style.marginBottom = '30px';
        logo.style.display = '';
        logo.style.verticalAlign = '';
        logo.style.marginRight = '';
      } else {
        logo.style.width = '140px';
        logo.style.height = '115px';
        logo.style.marginBottom = '0px';
        logo.style.display = '';
        logo.style.verticalAlign = '';
        logo.style.marginRight = '';
      }
    }
    updateLogoSizes();
    window.addEventListener('resize', updateLogoSizes);

    const desc = document.createElement('div');
    desc.innerHTML = 'Luna is the first web3 AI influencer — <br>engineered to shill, sing, and dance.<br>A fully autonomous brand <br>ambassador who lives on-chain and <br>never logs off. Powered by $LUNA.';
    desc.style.width = '30vw';
    desc.style.height = '120px';
    desc.style.opacity = '1';
    desc.style.color = '#fff';
    desc.style.fontFamily = 'League Spartan, Arial, sans-serif';
    desc.style.fontWeight = '400';
    desc.style.fontSize = '14px';
    desc.style.letterSpacing = '-0.1px';
    desc.style.lineHeight = '1.3em';
    desc.style.textAlign = 'left';
    desc.style.display = 'flex';
    desc.style.alignItems = 'flex-start';
    desc.style.justifyContent = 'flex-start';
    desc.style.alignContent = 'flex-start';
    desc.style.overflow = 'hidden';
    desc.style.zIndex = '9';
    desc.style.transition = 'all 0.3s ease';
    rightBox.appendChild(desc);

    function updateContentSizes() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        desc.style.width = '20vw';
        desc.style.height = '120px';
        desc.style.fontSize = '16px';
        desc.style.lineHeight = '1.3em';
        desc.style.letterSpacing = '-0.1px';
        desc.style.display = '';
        desc.style.verticalAlign = '';
        desc.style.flex = '';
        desc.style.minWidth = '';
        desc.innerHTML = 'Luna is the first web3 AI influencer — <br>engineered to shill, sing, and dance.<br>A fully autonomous brand <br>ambassador who lives on-chain and <br>never logs off. Powered by $LUNA.';
      } else if (screenWidth >= 810 && screenWidth <= 1199) {
        desc.style.width = '100%';
        desc.style.height = '98px';
        desc.style.fontSize = '12px';
        desc.style.lineHeight = '1.2em';
        desc.style.letterSpacing = '-0.1px';
        desc.style.display = '';
        desc.style.verticalAlign = '';
        desc.style.flex = '';
        desc.style.minWidth = '';
        desc.innerHTML = 'Luna is the first web3 AI influencer — <br>engineered to shill, sing, and dance.<br>A fully autonomous brand <br>ambassador who lives on-chain and <br>never logs off. Powered by $LUNA.';
      } else {
        desc.style.width = '100%';
        desc.style.height = '98px';
        desc.style.fontSize = '11px';
        desc.style.lineHeight = '1.2em';
        desc.style.letterSpacing = '-0.1px';
        desc.style.display = 'flex';
        desc.style.alignItems = 'flex-start';
        desc.style.justifyContent = 'flex-end';
        desc.style.flex = '1';
        desc.style.textAlign = 'left';
        desc.innerHTML = 'Luna is the first web3 AI <br>influencer — engineered <br>to shill, sing, and dance. <br>A fully autonomous brand <br>ambassador who lives <br>on-chain and never logs <br>off. Powered by $LUNA.';
      }
    }
    updateContentSizes();
    window.addEventListener('resize', updateContentSizes);

    sessionDiv.appendChild(rightBox);

    const socials = [
      { href: 'https://x.com/luna_virtuals', img: 'photo/twitter.png', alt: 'X', size: 33 },
      { href: 'https://www.tiktok.com/@lunabyvirtuals', img: 'photo/tik-tok.png', alt: 'TikTok', size: 32 },
      { href: 'https://www.youtube.com/@aidol_official', img: 'photo/youtube.png', alt: 'YouTube', size: 32 },
      { href: 'https://www.instagram.com/lunabyvirtuals?igsh=eW93M29qZmtrc3J2', img: 'photo/instagram.png', alt: 'Instagram', size: 33 },
    ];
    const stack = document.createElement('div');
    stack.style.position = 'absolute';
    stack.style.left = '50px';
    stack.style.top = '50%';
    stack.style.transform = 'translateY(-50%)';
    stack.style.display = 'flex';
    stack.style.flexDirection = 'column';
    stack.style.gap = '30px';
    stack.style.zIndex = '12';
    stack.style.transition = 'all 0.3s ease';
    
    const socialElements = [];
    socials.forEach(social => {
      const a = document.createElement('a');
      a.href = social.href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.style.display = 'block';
      a.style.width = social.size + 'px';
      a.style.height = social.size + 'px';
      a.style.marginBottom = '10px';
      a.style.transition = 'all 0.3s ease';
      const icon = document.createElement('img');
      icon.src = social.img;
      icon.alt = social.alt;
      icon.style.width = '100%';
      icon.style.height = '100%';
      icon.style.objectFit = 'contain';
      icon.style.filter = 'invert(1) brightness(2)';
      a.appendChild(icon);
      stack.appendChild(a);
      socialElements.push({ element: a, originalSize: social.size });
    });

    function updateSocialSizes() {
      const screenWidth = window.innerWidth;
      let sizeMultiplier = 1;
      let gapSize = '30px';
      let leftPosition = '50px';
      
      if (screenWidth >= 1200) {
        sizeMultiplier = 1;
        gapSize = '30px';
        leftPosition = '50px';
      } else if (screenWidth >= 810 && screenWidth <= 1199) {
        sizeMultiplier = 1;
        gapSize = '40px';
        leftPosition = '40px';
      } else {
        sizeMultiplier = 0;
        gapSize = '0px';
        leftPosition = '0px';
      }
      
      socialElements.forEach(social => {
        const newSize = social.originalSize * sizeMultiplier;
        social.element.style.width = newSize + 'px';
        social.element.style.height = newSize + 'px';
        social.element.style.display = newSize > 0 ? 'block' : 'none';
      });
      
      stack.style.gap = gapSize;
      stack.style.left = leftPosition;
    }
    updateSocialSizes();
    window.addEventListener('resize', updateSocialSizes);
    sessionDiv.appendChild(stack);

    main.appendChild(sessionDiv);
    return;
  }

  // Render video session
  if (src.endsWith('.mp4')) {
    sessionDiv.style.position = 'relative';
    sessionDiv.style.width = '100vw';
    sessionDiv.style.height = '100vh';
    sessionDiv.style.overflow = 'hidden';
    sessionDiv.style.display = 'block';
    sessionDiv.style.background = '#000';
    const video = document.createElement('video');
    video.src = src;
    video.loop = true;
    video.playsInline = true;
    video.style.position = 'absolute';
    video.style.left = '0';
    video.style.top = '0';
    video.style.width = '100vw';
    video.style.height = '100vh';
    video.style.objectFit = 'fill';
    video.style.display = 'block';
    video.style.zIndex = '1';
    video.style.background = '#000';
    video.controls = false;
    sessionDiv.appendChild(video);

    if (src === 'photo/Luna MV(5).mp4') {
      lunaVideo = video;
      video.autoplay = false;
      video.muted = true;
      video.pause();
      // Add logo to Luna MV video
      const logo = document.createElement('img');
      logo.src = 'photo/Luna_White.png';
      logo.alt = 'Luna Logo';
      logo.style.position = 'absolute';
      logo.style.left = '21px';
      logo.style.top = '19px';
      logo.style.width = '183px';
      logo.style.height = '122px';
      logo.style.zIndex = '100';
      sessionDiv.style.position = 'relative';
      sessionDiv.appendChild(logo);
      // Responsive logo position for Luna MV
      function updateLunaMVLogoPosition() {
        if (window.innerWidth >= 1200) {
          logo.style.left = '61px';
          logo.style.top = '49px';
          logo.style.width = '183px';
          logo.style.height = '122px';
        } else if (window.innerWidth >= 810 && window.innerWidth < 1200) {
          logo.style.left = '41px';
          logo.style.top = '39px';
          logo.style.width = '183px';
          logo.style.height = '122px';
        } else {
          logo.style.left = '18px';
          logo.style.top = '12px';
          logo.style.width = '72px';
          logo.style.height = '56px';
        }
      }
      updateLunaMVLogoPosition();
      window.addEventListener('resize', updateLunaMVLogoPosition);
    } else {
      video.autoplay = true;
      video.muted = true;
    }
    // Add mute/unmute button for video (except collage)
    if (src !== 'photo/Luna_website collage.mp4') {
      const muteBtn = document.createElement('button');
      muteBtn.style.position = 'absolute';
      muteBtn.style.right = '32px';
      muteBtn.style.bottom = '32px';
      muteBtn.style.zIndex = '10';
      muteBtn.style.background = 'rgba(0,0,0,0.5)';
      muteBtn.style.border = 'none';
      muteBtn.style.borderRadius = '50%';
      muteBtn.style.width = '48px';
      muteBtn.style.height = '48px';
      muteBtn.style.cursor = 'pointer';
      muteBtn.style.display = 'flex';
      muteBtn.style.alignItems = 'center';
      muteBtn.style.justifyContent = 'center';
      const iconImg = document.createElement('img');
      iconImg.src = video.muted ? 'photo/sound-off.png' : 'photo/speaker-filled-audio-tool.png';
      iconImg.alt = video.muted ? 'Mute' : 'Unmute';
      iconImg.style.width = '32px';
      iconImg.style.height = '32px';
      iconImg.style.objectFit = 'contain';
      iconImg.style.filter = 'invert(1) brightness(2)';
      muteBtn.appendChild(iconImg);
      muteBtn.onclick = function() {
        video.muted = !video.muted;
        if (video.muted) {
          iconImg.src = 'photo/sound-off.png';
          iconImg.alt = 'Mute';
        } else {
          iconImg.src = 'photo/speaker-filled-audio-tool.png';
          iconImg.alt = 'Unmute';
        }
      };
      sessionDiv.style.position = 'relative';
      sessionDiv.appendChild(muteBtn);
    }
  } else if (src === 'photo/backG.png') {
    // Render contact and footer section for backG.png session
    sessionDiv.style.position = 'relative';
    sessionDiv.style.width = '100vw';
    sessionDiv.style.height = '1749px';
    sessionDiv.style.overflow = 'hidden';
    sessionDiv.style.display = 'block';
    sessionDiv.style.background = '#000';

    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.style.position = 'absolute';
    img.style.left = '0';
    img.style.top = '0';
    img.style.width = '100vw';
    img.style.height = '1749px';
    img.style.objectFit = 'fill';
    img.style.display = 'block';
    img.style.zIndex = '1';
    

    
    sessionDiv.appendChild(img);

    const contactSection = document.createElement('div');
    contactSection.style.position = 'absolute';
    contactSection.style.top = '0';
    contactSection.style.left = '50%';
    contactSection.style.transform = 'translateX(-50%)';
    contactSection.style.width = '1200px';
    contactSection.style.maxWidth = '95vw';
    contactSection.style.height = '1000px';
    contactSection.style.display = 'flex';
    contactSection.style.flexDirection = 'row';
    contactSection.style.alignItems = 'center';
    contactSection.style.justifyContent = 'center';
    contactSection.style.gap = '10px';
    contactSection.style.padding = '200px 0 150px 0';
    contactSection.style.zIndex = '20';

    function updateContactSectionSizes() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        contactSection.style.width = '1200px';
        contactSection.style.height = '1000px';
        contactSection.style.padding = '200px 0 150px 0';
      } else if (screenWidth >= 810 && screenWidth <= 1199) {
        contactSection.style.width = '810px';
        contactSection.style.height = '533px';
        contactSection.style.padding = '200px 0 90px 0';
      } else {
        contactSection.style.width = '390px';
        contactSection.style.height = '296px';
        contactSection.style.padding = '100px 0 70px 0';
      }
    }
    updateContactSectionSizes();
    window.addEventListener('resize', updateContactSectionSizes);

    const contactContainer = document.createElement('div');
    contactContainer.style.width = '100%';
    contactContainer.style.height = '650px';
    contactContainer.style.display = 'flex';
    contactContainer.style.flexDirection = 'column';
    contactContainer.style.alignItems = 'center';
    contactContainer.style.justifyContent = 'flex-start';
    contactContainer.style.padding = '0 50px';
    contactContainer.style.gap = '0';

    function updateContactContainerSizes() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        contactContainer.style.width = '100%';
        contactContainer.style.height = '650px';
        contactContainer.style.padding = '0 50px';
        contactContainer.style.gap = '0';
      } else if (screenWidth >= 810 && screenWidth <= 1199) {
        contactContainer.style.width = '100%';
        contactContainer.style.height = '350px';
        contactContainer.style.padding = '0 20px';
        contactContainer.style.gap = '0';
      } else {
        contactContainer.style.width = '100%';
        contactContainer.style.height = '126px';
        contactContainer.style.padding = '0 15px';
        contactContainer.style.gap = '0';
      }
    }
    updateContactContainerSizes();
    window.addEventListener('resize', updateContactContainerSizes);

    const contactGrid = document.createElement('div');
    contactGrid.style.width = '100%';
    contactGrid.style.height = '650px';
    contactGrid.style.display = 'flex';
    contactGrid.style.flexDirection = 'row';
    contactGrid.style.alignItems = 'flex-start';
    contactGrid.style.justifyContent = 'flex-start';
    contactGrid.style.gap = '20px';
    contactGrid.style.padding = '0';

    function updateContactGridSizes() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        contactGrid.style.width = '100%';
        contactGrid.style.height = '650px';
        contactGrid.style.gap = '20px';
        contactGrid.style.padding = '0';
      } else if (screenWidth >= 810 && screenWidth <= 1199) {
        contactGrid.style.width = '100%';
        contactGrid.style.height = '350px';
        contactGrid.style.gap = '20px';
        contactGrid.style.padding = '0';
      } else {
        contactGrid.style.width = '100%';
        contactGrid.style.height = '126px';
        contactGrid.style.gap = '20px';
        contactGrid.style.padding = '0';
      }
    }
    updateContactGridSizes();
    window.addEventListener('resize', updateContactGridSizes);

    const blank = document.createElement('div');
    blank.style.flex = '0.6';
    blank.style.height = '650px';
    
    function updateBlankSizes() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        blank.style.flex = '0.6';
        blank.style.height = '650px';
      } else if (screenWidth >= 810 && screenWidth <= 1199) {
        blank.style.flex = '0.13';
        blank.style.height = '350px';
      } else {
        blank.style.flex = '1';
        blank.style.height = '126px';
      }
    }
    updateBlankSizes();
    window.addEventListener('resize', updateBlankSizes);
    
    contactGrid.appendChild(blank);

    const contactContent = document.createElement('div');
    contactContent.style.flex = '1';
    contactContent.style.height = '650px';
    contactContent.style.display = 'flex';
    contactContent.style.flexDirection = 'column';
    contactContent.style.alignItems = 'flex-start';
    contactContent.style.justifyContent = 'flex-start';
    contactContent.style.gap = '20px';
    contactContent.style.padding = '0';
    
    function updateContactContentSizes() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        contactContent.style.flex = '1';
        contactContent.style.height = '650px';
        contactContent.style.gap = '20px';
        contactContent.style.padding = '0';
      } else if (screenWidth >= 810 && screenWidth <= 1199) {
        contactContent.style.flex = '1';
        contactContent.style.height = '350px';
    contactContent.style.gap = '117px';
    contactContent.style.padding = '0';
      } else {
        contactContent.style.flex = '1';
        contactContent.style.height = '126px';
        contactContent.style.gap = '20px';
        contactContent.style.padding = '0';
      }
    }
    updateContactContentSizes();
    window.addEventListener('resize', updateContactContentSizes);

    const contactEmail = document.createElement('div');
    contactEmail.style.fontFamily = 'Geist, Arial, sans-serif';
    contactEmail.style.fontWeight = '500';
    contactEmail.style.fontStyle = 'bold, italic';
    contactEmail.style.fontSize = '5rem';
    contactEmail.style.color = '#000';
    contactEmail.style.lineHeight = '1em';
    contactEmail.style.letterSpacing = '-3px';
    contactEmail.style.textAlign = 'justify';
    contactEmail.style.width = '708px';
    contactEmail.style.height = '160px';
    contactEmail.style.maxWidth = '100%';
    contactEmail.style.opacity = '0';
    contactEmail.style.transform = 'scale(0.8) translateY(40px)';
    contactEmail.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    contactEmail.innerHTML = 'Email us at<br>Collab@lunaworld.ai';
    
    function updateContactEmailText() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        contactEmail.style.fontSize = '5rem';
        contactEmail.style.width = '708px';
        contactEmail.style.height = '160px';
        contactEmail.style.letterSpacing = '-3px';
        contactEmail.style.lineHeight = '1em';
        contactEmail.innerHTML = 'Email us at<br>Collab@lunaworld.ai';
      } else if (screenWidth >= 810 && screenWidth <= 1199) {
        contactEmail.style.fontSize = '3rem';
        contactEmail.style.width = '350px';
        contactEmail.style.height = '60px';
        contactEmail.style.marginBottom = '12px';
        contactEmail.style.letterSpacing = '-1.5px';
        contactEmail.style.lineHeight = '1.1';
        contactEmail.innerHTML = 'Email us at<br>Collab@lunaworld.ai';
      } else {
        contactEmail.style.fontSize = '2.2rem';
        contactEmail.style.width = '90vw';
        contactEmail.style.height = '48px';
        contactEmail.style.marginBottom = '16px';
        contactEmail.style.letterSpacing = '-1px';
        contactEmail.style.lineHeight = '1.1';
        contactEmail.innerHTML = 'Email us at<br>Collab@lunaworld.ai';
      }
    }
    updateContactEmailText();
    window.addEventListener('resize', updateContactEmailText);
    
    contactContent.appendChild(contactEmail);

    const emailObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'scale(1) translateY(0)';
        }
      });
    }, { threshold: 0.3 });
    emailObserver.observe(contactEmail);

    const formContainer = document.createElement('div');
    formContainer.style.width = '100%';
    formContainer.style.height = '37px';
    formContainer.style.display = 'flex';
    formContainer.style.flexDirection = 'column';
    formContainer.style.alignItems = 'flex-start';
    formContainer.style.justifyContent = 'flex-start';
    formContainer.style.gap = '20px';
    formContainer.style.padding = '0';

    const contactForm = document.createElement('form');
    contactForm.action = 'https://formspree.io/f/xovlderr';
    contactForm.method = 'POST';
    contactForm.style.width = '100%';
    contactForm.style.display = 'flex';
    contactForm.style.flexDirection = 'column';
    contactForm.style.alignItems = 'flex-start';
    contactForm.style.justifyContent = 'flex-start';
    contactForm.style.gap = '20px';
    contactForm.style.padding = '0';

    const emailLabel = document.createElement('label');
    emailLabel.style.fontFamily = 'Geist, Arial, sans-serif';
    emailLabel.style.fontSize = '14px';
    emailLabel.style.color = '#000';
    emailLabel.style.marginBottom = '5px';
    emailLabel.style.display = 'flex';
    emailLabel.style.flexDirection = 'column';
    emailLabel.style.gap = '5px';

    
    const emailLabelText = document.createElement('span');
    emailLabelText.textContent = 'Your email:';
    emailLabel.appendChild(emailLabelText);
    
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.required = true;
    emailInput.style.width = '300px';
    emailInput.style.height = '37px';
    emailInput.style.padding = '8px 16px';
    emailInput.style.border = '1px solid #ccc';
    emailInput.style.borderRadius = '8px';
    emailInput.style.fontFamily = 'Geist, Arial, sans-serif';
    emailInput.style.fontSize = '16px';
    emailInput.style.transition = 'border-color 0.3s ease';
    emailInput.style.background = 'rgba(0, 0, 0, 0.3)';
    emailInput.style.color = '#fff';
    emailInput.style.placeholder = 'Enter your email';
    emailLabel.appendChild(emailInput);



    emailInput.addEventListener('input', function() {
      if (this.checkValidity()) {
        this.style.borderColor = '#4CAF50';
      } else {
        this.style.borderColor = '#ccc';
      }
    });

    emailInput.addEventListener('blur', function() {
      if (this.value && !this.checkValidity()) {
        this.style.borderColor = '#FF2244';
      }
    });

    const messageLabel = document.createElement('label');
    messageLabel.style.fontFamily = 'Geist, Arial, sans-serif';
    messageLabel.style.fontSize = '14px';
    messageLabel.style.color = '#000';
    messageLabel.style.marginBottom = '5px';
    messageLabel.style.display = 'flex';
    messageLabel.style.flexDirection = 'column';
    messageLabel.style.gap = '5px';

    
    const messageLabelText = document.createElement('span');
    messageLabelText.textContent = 'Your message:';
    messageLabel.appendChild(messageLabelText);
    
    const messageTextarea = document.createElement('textarea');
    messageTextarea.name = 'message';
    messageTextarea.required = true;
    messageTextarea.style.width = '300px';
    messageTextarea.style.height = '100px';
    messageTextarea.style.padding = '8px 16px';
    messageTextarea.style.border = '1px solid #ccc';
    messageTextarea.style.borderRadius = '8px';
    messageTextarea.style.fontFamily = 'Geist, Arial, sans-serif';
    messageTextarea.style.fontSize = '16px';
    messageTextarea.style.resize = 'vertical';
    messageTextarea.style.transition = 'border-color 0.3s ease';
    messageTextarea.style.background = 'rgba(0, 0, 0, 0.3)';
    messageTextarea.style.color = '#fff';
    messageTextarea.style.placeholder = 'Enter your message';
    messageLabel.appendChild(messageTextarea);



    messageTextarea.addEventListener('input', function() {
      if (this.value.trim().length > 0) {
        this.style.borderColor = '#4CAF50';
      } else {
        this.style.borderColor = '#ccc';
      }
    });

    messageTextarea.addEventListener('blur', function() {
      if (this.value.trim().length === 0) {
        this.style.borderColor = '#FF2244';
      }
    });

    const contactFormBtn = document.createElement('button');
    contactFormBtn.type = 'submit';
    contactFormBtn.style.width = '158px';
    contactFormBtn.style.height = '37px';
    contactFormBtn.style.display = 'flex';
    contactFormBtn.style.flexDirection = 'row';
    contactFormBtn.style.alignItems = 'center';
    contactFormBtn.style.justifyContent = 'center';
    contactFormBtn.style.gap = '0';
    contactFormBtn.style.padding = '8px 24px';
    contactFormBtn.style.transition = 'all 0.2s ease-in-out';
    contactFormBtn.style.opacity = '0';
    contactFormBtn.style.visibility = 'visible';
    contactFormBtn.style.background = '#000';
    contactFormBtn.style.overflow = 'visible';
    contactFormBtn.style.borderRadius = '30px';
    contactFormBtn.style.border = 'none';
    contactFormBtn.style.cursor = 'pointer';
    contactFormBtn.style.position = 'relative';
    contactFormBtn.style.zIndex = '20';
    contactFormBtn.style.transform = 'scale(0.8) translateY(40px)';
    contactFormBtn.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

    const sendMessageText = document.createElement('span');
    sendMessageText.style.position = 'relative';
    sendMessageText.style.width = 'auto';
    sendMessageText.style.minWidth = '110px';
    sendMessageText.style.height = '21px';
    sendMessageText.style.fontFamily = 'Geist, Arial, sans-serif';
    sendMessageText.style.fontWeight = '500';
    sendMessageText.style.fontStyle = 'bold, italic';
    sendMessageText.style.fontSize = '16px';
    sendMessageText.style.lineHeight = '1.3em';
    sendMessageText.style.color = '#fff';
    sendMessageText.style.textDecoration = 'none';
    sendMessageText.style.whiteSpace = 'nowrap';
    sendMessageText.style.overflow = 'hidden';
    sendMessageText.style.textOverflow = 'ellipsis';
    sendMessageText.textContent = 'Send message';
    contactFormBtn.appendChild(sendMessageText);

    function updateButtonSizes() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        contactFormBtn.style.width = '158px';
        contactFormBtn.style.height = '37px';
        contactFormBtn.style.padding = '8px 24px';
        sendMessageText.style.fontSize = '16px';
        sendMessageText.style.minWidth = '110px';
      } else if (screenWidth >= 810 && screenWidth <= 1199) {
        contactFormBtn.style.width = '159px';
        contactFormBtn.style.height = '36px';
        contactFormBtn.style.padding = '8px 24px';
        sendMessageText.style.fontSize = '16px';
        sendMessageText.style.minWidth = '110px';
      } else {
        contactFormBtn.style.width = '152px';
        contactFormBtn.style.height = '36px';
        contactFormBtn.style.padding = '8px 24px';
        sendMessageText.style.fontSize = '16px';
        sendMessageText.style.minWidth = '110px';
      }
    }
    updateButtonSizes();
    window.addEventListener('resize', updateButtonSizes);

    const spinner = document.createElement('div');
    spinner.style.position = 'relative';
    spinner.style.width = '20px';
    spinner.style.height = '20px';
    spinner.style.overflow = 'hidden';
    spinner.style.borderRadius = '50%';
    spinner.style.display = 'none';
    spinner.style.border = '2px solid transparent';
    spinner.style.borderTop = '2px solid #fff';
    spinner.style.animation = 'spin 1s linear infinite';
    contactFormBtn.appendChild(spinner);

    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);

    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      if (!emailInput.checkValidity()) {
        emailInput.style.borderColor = '#FF2244';
        emailInput.focus();
        return;
      }
      
      if (messageTextarea.value.trim().length === 0) {
        messageTextarea.style.borderColor = '#FF2244';
        messageTextarea.focus();
        return;
      }
      
      contactFormBtn.style.width = '68px';
      sendMessageText.style.display = 'none';
      spinner.style.display = 'block';
      contactFormBtn.disabled = true;
      contactFormBtn.style.cursor = 'not-allowed';

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          contactFormBtn.style.width = '280px';
          contactFormBtn.style.background = '#000';
          sendMessageText.textContent = 'Message sent. Thank you!';
          sendMessageText.style.display = 'block';
          sendMessageText.style.color = '#fff';
          spinner.style.display = 'none';
          contactForm.reset();
          
          setTimeout(() => {
            contactFormBtn.style.width = '158px';
            sendMessageText.textContent = 'Send message';
            contactFormBtn.disabled = false;
            contactFormBtn.style.cursor = 'pointer';
          }, 3000);
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        contactFormBtn.style.width = '260px';
        contactFormBtn.style.background = 'rgba(255, 34, 68, 0.15)';
        sendMessageText.textContent = 'Something went wrong';
        sendMessageText.style.color = '#FF2244';
        sendMessageText.style.display = 'block';
        spinner.style.display = 'none';
        contactFormBtn.disabled = false;
        contactFormBtn.style.cursor = 'pointer';
        
        setTimeout(() => {
          contactFormBtn.style.width = '158px';
          contactFormBtn.style.background = '#000';
          sendMessageText.textContent = 'Send message';
          sendMessageText.style.color = '#fff';
        }, 3000);
      }
    });

    contactForm.appendChild(emailLabel);
    contactForm.appendChild(messageLabel);
    contactForm.appendChild(contactFormBtn);
    
    formContainer.appendChild(contactForm);
    contactContent.appendChild(formContainer);

    const buttonObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'scale(1) translateY(0)';
        }
      });
    }, { threshold: 0.3 });
    buttonObserver.observe(contactFormBtn);
    contactGrid.appendChild(contactContent);
    contactContainer.appendChild(contactGrid);
    contactSection.appendChild(contactContainer);
    sessionDiv.appendChild(contactSection);

    const officeSection = document.createElement('div');
    officeSection.style.position = 'absolute';
    officeSection.style.top = '1000px';
    officeSection.style.left = '50%';
    officeSection.style.transform = 'translateX(-50%)';
    officeSection.style.width = '1200px';
    officeSection.style.maxWidth = '95vw';
    officeSection.style.height = '49px';
    officeSection.style.display = 'flex';
    officeSection.style.flexDirection = 'column';
    officeSection.style.alignItems = 'center';
    officeSection.style.justifyContent = 'center';
    officeSection.style.gap = '60px';
    officeSection.style.padding = '0';
    officeSection.style.zIndex = '20';

    const officeContainer = document.createElement('div');
    officeContainer.style.width = '100%';
    officeContainer.style.height = '49px';
    officeContainer.style.display = 'flex';
    officeContainer.style.flexDirection = 'column';
    officeContainer.style.alignItems = 'center';
    officeContainer.style.justifyContent = 'flex-start';
    officeContainer.style.gap = '50px';
    officeContainer.style.padding = '0 50px';

    const officeGrid = document.createElement('div');
    officeGrid.style.width = '100%';
    officeGrid.style.height = '49px';
    officeGrid.style.display = 'flex';
    officeGrid.style.flexDirection = 'row';
    officeGrid.style.alignItems = 'flex-start';
    officeGrid.style.justifyContent = 'flex-start';
    officeGrid.style.gap = '20px';
    officeGrid.style.padding = '0';

    const officeBlank = document.createElement('div');
    officeBlank.style.flex = '0.6';
    officeBlank.style.height = '100%';
    officeGrid.appendChild(officeBlank);

    const officeContent = document.createElement('div');
    officeContent.style.flex = '1';
    officeContent.style.height = '100%';
    officeContent.style.display = 'flex';
    officeContent.style.flexDirection = 'column';
    officeContent.style.alignItems = 'flex-start';
    officeContent.style.justifyContent = 'flex-start';
    officeContent.style.gap = '50px';
    officeContent.style.padding = '0';
    officeGrid.appendChild(officeContent);
    officeContainer.appendChild(officeGrid);
    officeSection.appendChild(officeContainer);
    sessionDiv.appendChild(officeSection);

    const footerContainer = document.createElement('div');
    footerContainer.style.position = 'absolute';
    footerContainer.style.left = '50%';
    footerContainer.style.top = '1049px';
    footerContainer.style.transform = 'translateX(-50%)';
    footerContainer.style.width = '1200px';
    footerContainer.style.maxWidth = '95vw';
    footerContainer.style.height = '700px';
    footerContainer.style.display = 'flex';
    footerContainer.style.flexDirection = 'column';
    footerContainer.style.alignItems = 'center';
    footerContainer.style.justifyContent = 'flex-start';
    footerContainer.style.gap = '60px';
    footerContainer.style.padding = '50px 0';
    footerContainer.style.zIndex = '10';

    function updateFooterContainerSizes() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        footerContainer.style.width = '1200px';
        footerContainer.style.height = '458px';
        footerContainer.style.padding = '50px 0';
        footerContainer.style.gap = '60px';
      } else if (screenWidth >= 810 && screenWidth <= 1199) {
        footerContainer.style.width = '810px';
        footerContainer.style.height = '389px';
        footerContainer.style.padding = '0 20px 0 20px';
        footerContainer.style.gap = '60px';
      } else {
        footerContainer.style.width = '388px';
        footerContainer.style.height = '389px';
        footerContainer.style.padding = '0';
        footerContainer.style.gap = '60px';
      }
    }
    updateFooterContainerSizes();
    window.addEventListener('resize', updateFooterContainerSizes);



    const lunaLogoLink = document.createElement('a');
    lunaLogoLink.href = '#';
    lunaLogoLink.style.textDecoration = 'none';
    const lunaImg = document.createElement('img');
    lunaImg.src = 'photo/Luna_Black.png';
    lunaImg.alt = 'Luna Black Logo';
    lunaImg.style.width = '410px';
    lunaImg.style.height = '254px';
    lunaImg.style.display = 'block';
    lunaImg.style.objectFit = 'contain';
    lunaImg.style.background = 'transparent';
    lunaLogoLink.appendChild(lunaImg);
    
    function updateFooterLogoSizes() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        lunaImg.style.width = '410px';
        lunaImg.style.height = '254px';
      } else if (screenWidth >= 810 && screenWidth <= 1199) {
        lunaImg.style.width = '332px';
        lunaImg.style.height = '185px';
      } else {
        lunaImg.style.width = '332px';
        lunaImg.style.height = '185px';
      }
    }
    updateFooterLogoSizes();
    window.addEventListener('resize', updateFooterLogoSizes);
    
    footerContainer.appendChild(lunaLogoLink);

    lunaLogoLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const followBox = document.createElement('div');
    followBox.style.width = '100%';
    followBox.style.height = '84px';
    followBox.style.display = 'flex';
    followBox.style.flexDirection = 'row';
    followBox.style.alignItems = 'center';
    followBox.style.justifyContent = 'center';
    followBox.style.gap = '10px';
    followBox.style.padding = '80px 0 0 0';

    const followText = document.createElement('span');
    followText.textContent = 'Follow me on:';
    followText.style.fontFamily = 'Geist, Arial, sans-serif';
    followText.style.fontWeight = '500';
    followText.style.fontStyle = 'bold, italic';
    followText.style.fontSize = '16px';
    followText.style.color = '#888';
    followText.style.width = '103px';
    followText.style.height = '24px';
    followBox.appendChild(followText);

    const socialContainer = document.createElement('div');
    socialContainer.style.width = '125px';
    socialContainer.style.height = '20px';
    socialContainer.style.display = 'flex';
    socialContainer.style.flexDirection = 'row';
    socialContainer.style.alignItems = 'center';
    socialContainer.style.justifyContent = 'flex-start';


    const socials = [
      { href: 'https://x.com/luna_virtuals', img: 'photo/twitter.png', alt: 'X' },
      { href: 'https://www.youtube.com/@aidol_official', img: 'photo/youtube.png', alt: 'YouTube' },
      { href: 'https://www.instagram.com/lunabyvirtuals', img: 'photo/instagram.png', alt: 'Instagram' },
      { href: 'https://www.tiktok.com/@lunabyvirtuals', img: 'photo/tik-tok.png', alt: 'TikTok' },
    ];
    
    socials.forEach(social => {
      const a = document.createElement('a');
      a.href = social.href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.style.display = 'inline-block';
      a.style.width = '20px';
      a.style.height = '20px';
      a.style.margin = '0 5px';
      const icon = document.createElement('img');
      icon.src = social.img;
      icon.alt = social.alt;
      icon.style.width = '100%';
      icon.style.height = '100%';
      icon.style.objectFit = 'contain';
      icon.style.filter = 'invert(1) brightness(0.2)';
      a.appendChild(icon);
      socialContainer.appendChild(a);
    });

    followBox.appendChild(socialContainer);
    footerContainer.appendChild(followBox);
    sessionDiv.appendChild(footerContainer);
  } else {
    // Render default image session
    sessionDiv.style.position = 'relative';
    sessionDiv.style.width = '100vw';
    sessionDiv.style.height = '100vh';
    sessionDiv.style.overflow = 'hidden';
    sessionDiv.style.display = 'block';
    sessionDiv.style.background = '#000';
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.style.position = 'absolute';
    img.style.left = '0';
    img.style.top = '0';
    img.style.width = '100vw';
    img.style.height = '100vh';
    img.style.objectFit = 'fill';
    img.style.display = 'block';
    img.style.zIndex = '1';
    sessionDiv.appendChild(img);
  }
  main.appendChild(sessionDiv);
}); 