// Monkey-patch CanvasRenderingContext2D.prototype.arc to fix a bug in qr-code-styling
// where horizontal lines/smears appear between dots in newer Chromium browsers.
// We only apply this fix if the arc is a full circle (like basic dots) to avoid breaking
// path connections on finder patterns (which are drawn using partial arcs/curves).
(function() {
  const originalArc = CanvasRenderingContext2D.prototype.arc;
  CanvasRenderingContext2D.prototype.arc = function(x, y, radius, startAngle, endAngle, counterclockwise) {
    const angleDiff = Math.abs(endAngle - startAngle);
    const isFullCircle = Math.abs(angleDiff - Math.PI * 2) < 0.01;
    
    if (isFullCircle) {
      this.moveTo(x + radius, y);
    }
    
    originalArc.call(this, x, y, radius, startAngle, endAngle, counterclockwise);
  };
})();

// Cute predefined SVG Stickers
const STICKERS = {
  cat: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <polygon points="15,40 30,10 45,35" fill="#ff85a2" />
    <polygon points="85,40 70,10 55,35" fill="#ff85a2" />
    <ellipse cx="50" cy="55" rx="40" ry="32" fill="#ffccd5" stroke="#ff85a2" stroke-width="6" />
    <polygon points="20,38 30,18 40,34" fill="#ff4d6d" />
    <polygon points="80,38 70,18 60,34" fill="#ff4d6d" />
    <circle cx="35" cy="50" r="5" fill="#3c2f42" />
    <circle cx="65" cy="50" r="5" fill="#3c2f42" />
    <circle cx="33" cy="48" r="1.5" fill="#ffffff" />
    <circle cx="63" cy="48" r="1.5" fill="#ffffff" />
    <ellipse cx="27" cy="58" rx="6" ry="4" fill="#ff85a2" opacity="0.6" />
    <ellipse cx="73" cy="58" rx="6" ry="4" fill="#ff85a2" opacity="0.6" />
    <path d="M47,55 Q50,58 53,55" fill="none" stroke="#3c2f42" stroke-width="3" stroke-linecap="round" />
    <path d="M47,58 Q50,61 53,58" fill="none" stroke="#3c2f42" stroke-width="3" stroke-linecap="round" />
    <line x1="15" y1="55" x2="3" y2="52" stroke="#ff85a2" stroke-width="3" stroke-linecap="round" />
    <line x1="15" y1="62" x2="2" y2="62" stroke="#ff85a2" stroke-width="3" stroke-linecap="round" />
    <line x1="85" y1="55" x2="97" y2="52" stroke="#ff85a2" stroke-width="3" stroke-linecap="round" />
    <line x1="85" y1="62" x2="98" y2="62" stroke="#ff85a2" stroke-width="3" stroke-linecap="round" />
  </svg>`,
  
  heart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <path d="M12,35 C12,18 30,10 50,30 C70,10 88,18 88,35 C88,58 65,78 50,88 C35,78 12,58 12,35 Z" fill="#ff4d6d" stroke="#ff85a2" stroke-width="6" stroke-linejoin="round" />
    <ellipse cx="32" cy="30" rx="8" ry="4" fill="#ffffff" opacity="0.4" transform="rotate(-30 32 30)" />
  </svg>`,
  
  star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <path d="M50,5 L63,33 L93,38 L71,59 L76,89 L50,75 L24,89 L29,59 L7,38 L37,33 Z" fill="#ffd166" stroke="#f4a261" stroke-width="6" stroke-linejoin="round" />
    <circle cx="38" cy="48" r="4" fill="#3c2f42" />
    <circle cx="62" cy="48" r="4" fill="#3c2f42" />
    <path d="M47,56 Q50,59 53,56" fill="none" stroke="#3c2f42" stroke-width="2.5" stroke-linecap="round" />
    <ellipse cx="32" cy="53" rx="4" ry="2.5" fill="#f4a261" opacity="0.6" />
    <ellipse cx="68" cy="53" rx="4" ry="2.5" fill="#f4a261" opacity="0.6" />
  </svg>`,
  
  cloud: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <path d="M25,65 C15,65 10,55 18,47 C15,35 28,25 40,30 C48,20 68,20 75,32 C85,30 92,40 88,50 C94,60 85,70 75,67 C70,72 30,72 25,65 Z" fill="#e8f1f5" stroke="#a3c4f3" stroke-width="6" stroke-linejoin="round" />
    <circle cx="38" cy="48" r="4" fill="#3c2f42" />
    <circle cx="62" cy="48" r="4" fill="#3c2f42" />
    <path d="M48,53 Q50,55 52,53" fill="none" stroke="#3c2f42" stroke-width="2" stroke-linecap="round" />
    <ellipse cx="32" cy="52" rx="4" ry="2" fill="#ff85a2" opacity="0.6" />
    <ellipse cx="68" cy="52" rx="4" ry="2" fill="#ff85a2" opacity="0.6" />
  </svg>`,
  
  boba: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <path d="M25,25 L32,80 C33,85 38,88 43,88 L57,88 C62,88 67,85 68,80 L75,25 Z" fill="#ffe3e0" stroke="#f4a261" stroke-width="5" stroke-linejoin="round" />
    <path d="M26,35 L31,78 C32,82 36,84 40,84 L60,84 C64,84 68,82 69,78 L74,35 Z" fill="#e29578" />
    <circle cx="40" cy="74" r="5" fill="#3c2f42" />
    <circle cx="50" cy="76" r="5" fill="#3c2f42" />
    <circle cx="60" cy="73" r="5" fill="#3c2f42" />
    <circle cx="45" cy="66" r="5" fill="#3c2f42" />
    <circle cx="55" cy="67" r="5" fill="#3c2f42" />
    <ellipse cx="50" cy="25" rx="28" ry="6" fill="#ffffff" stroke="#f4a261" stroke-width="4" />
    <rect x="47" y="5" width="8" height="23" rx="3" fill="#ff758f" stroke="#f4a261" stroke-width="2" transform="rotate(-10 50 15)" />
    <circle cx="42" cy="46" r="3.5" fill="#3c2f42" />
    <circle cx="58" cy="46" r="3.5" fill="#3c2f42" />
    <path d="M48,51 Q50,53 52,51" fill="none" stroke="#3c2f42" stroke-width="2" stroke-linecap="round" />
  </svg>`,
  
  bear: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <circle cx="25" cy="28" r="16" fill="#ddb892" stroke="#b08968" stroke-width="5" />
    <circle cx="75" cy="28" r="16" fill="#ddb892" stroke="#b08968" stroke-width="5" />
    <circle cx="25" cy="28" r="9" fill="#ffb5a7" />
    <circle cx="75" cy="28" r="9" fill="#ffb5a7" />
    <circle cx="50" cy="56" r="38" fill="#ddb892" stroke="#b08968" stroke-width="5" />
    <ellipse cx="50" cy="66" rx="14" ry="10" fill="#ffffff" />
    <ellipse cx="50" cy="62" rx="5" ry="3.5" fill="#3c2f42" />
    <path d="M50,65 L50,70" stroke="#3c2f42" stroke-width="2" />
    <circle cx="36" cy="50" r="4" fill="#3c2f42" />
    <circle cx="64" cy="50" r="4" fill="#3c2f42" />
    <circle cx="34.5" cy="48.5" r="1.2" fill="#ffffff" />
    <circle cx="62.5" cy="48.5" r="1.2" fill="#ffffff" />
    <ellipse cx="26" cy="58" rx="5" ry="3" fill="#ff85a2" opacity="0.6" />
    <ellipse cx="74" cy="58" rx="5" ry="3" fill="#ff85a2" opacity="0.6" />
  </svg>`,
  
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <path d="M50,15 C50,35 65,50 85,50 C65,50 50,65 50,85 C50,65 35,50 15,50 C35,50 50,35 50,15 Z" fill="#ffd166" stroke="#f4a261" stroke-width="4" />
    <path d="M80,20 C80,28 86,34 94,34 C86,34 80,40 80,48 C80,40 74,34 66,34 C74,34 80,28 80,20 Z" fill="#ffd166" />
    <path d="M22,65 C22,71 27,76 33,76 C27,76 22,81 22,87 C22,81 17,76 11,76 C17,76 22,71 22,65 Z" fill="#ff758f" />
  </svg>`,
  
  music: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <path d="M35,70 A12,12 0 1,1 23,58 C23,58 23,20 23,20 L75,10 L75,48 A12,12 0 1,1 63,36" fill="none" stroke="#b388ff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M23,24 L75,14" fill="none" stroke="#b388ff" stroke-width="8" stroke-linecap="round" />
    <circle cx="21" cy="68" r="2" fill="#ffffff" />
    <circle cx="27" cy="66" r="2" fill="#ffffff" />
    <path d="M23,71 Q25,72 26,71" fill="none" stroke="#ffffff" stroke-width="1.5" />
    <circle cx="61" cy="46" r="2" fill="#ffffff" />
    <circle cx="67" cy="44" r="2" fill="#ffffff" />
    <path d="M63,49 Q65,50 66,49" fill="none" stroke="#ffffff" stroke-width="1.5" />
  </svg>`,

  shop: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <path d="M35,32 C35,18 65,18 65,32" fill="none" stroke="#ff758f" stroke-width="6" stroke-linecap="round" />
    <rect x="20" y="30" width="60" height="55" rx="14" fill="#ffe5ec" stroke="#ff758f" stroke-width="5" />
    <circle cx="40" cy="54" r="4.5" fill="#3c2f42" />
    <circle cx="60" cy="54" r="4.5" fill="#3c2f42" />
    <circle cx="38" cy="52" r="1.2" fill="#ffffff" />
    <circle cx="58" cy="52" r="1.2" fill="#ffffff" />
    <path d="M47,60 Q50,64 53,60" fill="none" stroke="#3c2f42" stroke-width="3" stroke-linecap="round" />
    <ellipse cx="32" cy="58" rx="4.5" ry="2.5" fill="#ff758f" opacity="0.6" />
    <ellipse cx="68" cy="58" rx="4.5" ry="2.5" fill="#ff758f" opacity="0.6" />
  </svg>`,

  pin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <path d="M50,90 C50,90 20,58 20,38 C20,20 33,8 50,8 C67,8 80,20 80,38 C80,58 50,90 50,90 Z" fill="#ff7096" stroke="#ff477e" stroke-width="6" stroke-linejoin="round" />
    <circle cx="50" cy="38" r="18" fill="#ffffff" />
    <circle cx="44" cy="38" r="3" fill="#3c2f42" />
    <circle cx="56" cy="38" r="3" fill="#3c2f42" />
    <path d="M48,43 Q50,45 52,43" fill="none" stroke="#3c2f42" stroke-width="2" stroke-linecap="round" />
    <ellipse cx="39" cy="40" rx="3" ry="1.5" fill="#ff85a2" opacity="0.6" />
    <ellipse cx="61" cy="40" rx="3" ry="1.5" fill="#ff85a2" opacity="0.6" />
  </svg>`,

  sushi: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <rect x="25" y="45" width="50" height="35" rx="12" fill="#ffffff" stroke="#3c2f42" stroke-width="5" />
    <rect x="18" y="28" width="64" height="22" rx="8" fill="#f4a261" stroke="#e76f51" stroke-width="4" />
    <path d="M28,30 Q33,48 38,30 M48,30 Q53,48 58,30" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.8" />
    <rect x="44" y="28" width="12" height="52" fill="#2d3748" />
    <circle cx="38" cy="38" r="2.5" fill="#3c2f42" />
    <circle cx="62" cy="38" r="2.5" fill="#3c2f42" />
    <path d="M49,42 Q50,44 51,42" fill="none" stroke="#3c2f42" stroke-width="1.5" stroke-linecap="round" />
  </svg>`,

  coffee: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <path d="M65,40 C78,40 78,65 65,65" fill="none" stroke="#e76f51" stroke-width="5" stroke-linecap="round" />
    <path d="M25,30 L30,70 C31,75 36,78 41,78 L59,78 C64,78 69,75 70,70 L75,30 Z" fill="#f4a261" stroke="#e76f51" stroke-width="5" stroke-linejoin="round" />
    <path d="M38,18 Q42,10 38,5" fill="none" stroke="#e76f51" stroke-width="3" stroke-linecap="round" />
    <path d="M50,18 Q54,10 50,5" fill="none" stroke="#e76f51" stroke-width="3" stroke-linecap="round" />
    <path d="M62,18 Q66,10 62,5" fill="none" stroke="#e76f51" stroke-width="3" stroke-linecap="round" />
    <circle cx="42" cy="52" r="3.5" fill="#ffffff" />
    <circle cx="58" cy="52" r="3.5" fill="#ffffff" />
    <path d="M48,58 Q50,60 52,58" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
    <ellipse cx="36" cy="56" rx="4" ry="2" fill="#e76f51" opacity="0.6" />
    <ellipse cx="64" cy="56" rx="4" ry="2" fill="#e76f51" opacity="0.6" />
  </svg>`
};

// Quick theme configurations
const PRESET_THEMES = {
  strawberry: {
    dotType: 'extra-rounded',
    cornerSquareType: 'extra-rounded',
    cornerDotType: 'dot',
    colorMode: 'gradient',
    gradStart: '#ff85a2',
    gradEnd: '#ff4d6d',
    gradType: 'linear',
    gradRot: 45,
    customCorners: false,
    bgColor: '#ffffff',
    transparentBg: false
  },
  matcha: {
    dotType: 'rounded',
    cornerSquareType: 'extra-rounded',
    cornerDotType: 'dot',
    colorMode: 'gradient',
    gradStart: '#70e000',
    gradEnd: '#38b000',
    gradType: 'linear',
    gradRot: 135,
    customCorners: false,
    bgColor: '#f4f9f4',
    transparentBg: false
  },
  ocean: {
    dotType: 'dots',
    cornerSquareType: 'dot',
    cornerDotType: 'dot',
    colorMode: 'gradient',
    gradStart: '#4ea8de',
    gradEnd: '#0077b6',
    gradType: 'linear',
    gradRot: 90,
    customCorners: true,
    cornerSquareColor: '#0096c7',
    cornerDotColor: '#03045e',
    bgColor: '#ffffff',
    transparentBg: false
  },
  sunset: {
    dotType: 'classy-rounded',
    cornerSquareType: 'extra-rounded',
    cornerDotType: 'dot',
    colorMode: 'gradient',
    gradStart: '#f77f00',
    gradEnd: '#fcbf49',
    gradType: 'linear',
    gradRot: 45,
    customCorners: false,
    bgColor: '#fffcf2',
    transparentBg: false
  },
  lavender: {
    dotType: 'extra-rounded',
    cornerSquareType: 'extra-rounded',
    cornerDotType: 'dot',
    colorMode: 'gradient',
    gradStart: '#b388ff',
    gradEnd: '#7c4dff',
    gradType: 'linear',
    gradRot: 60,
    customCorners: false,
    bgColor: '#ffffff',
    transparentBg: false
  },
  darkpastel: {
    dotType: 'classy',
    cornerSquareType: 'classy',
    cornerDotType: 'square',
    colorMode: 'single',
    singleColor: '#3c2f42',
    customCorners: false,
    bgColor: '#fcfbfe',
    transparentBg: false
  },
  brick: {
    dotType: 'extra-rounded',
    cornerSquareType: 'extra-rounded',
    cornerDotType: 'dot',
    colorMode: 'gradient',
    gradStart: '#a0522d',
    gradEnd: '#8c3a1e',
    gradType: 'linear',
    gradRot: 45,
    customCorners: false,
    bgColor: '#fcf8f5',
    transparentBg: false
  },
  orangegold: {
    dotType: 'extra-rounded',
    cornerSquareType: 'extra-rounded',
    cornerDotType: 'dot',
    colorMode: 'gradient',
    gradStart: '#f39c12',
    gradEnd: '#ffd700',
    gradType: 'linear',
    gradRot: 45,
    customCorners: false,
    bgColor: '#fffbf0',
    transparentBg: false
  },
  reset: {
    dotType: 'extra-rounded',
    cornerSquareType: 'extra-rounded',
    cornerDotType: 'dot',
    colorMode: 'single',
    singleColor: '#000000',
    customCorners: false,
    bgColor: '#ffffff',
    transparentBg: false
  }
};

// Helper: Convert raw SVG string to Base64 Data URL
function svgToDataUrl(svgString) {
  return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgString)));
}

// Global Application State
let activeLogoDataUrl = "";
let qrCode = null;

// Initialize when DOM loads
document.addEventListener("DOMContentLoaded", () => {

  // Initialize Lucide icons
  lucide.createIcons();

  // App UI elements
  const qrTextInput = document.getElementById("qrText");
  const clearTextBtn = document.getElementById("clearTextBtn");
  const dotTypeContainer = document.getElementById("dotTypeContainer");
  const cornerSquareType = document.getElementById("cornerSquareType");
  const cornerDotType = document.getElementById("cornerDotType");
  
  const colorModeSelector = document.getElementById("colorModeSelector");
  const singleColorPanel = document.getElementById("singleColorPanel");
  const gradientColorPanel = document.getElementById("gradientColorPanel");
  
  const qrColorSingle = document.getElementById("qrColorSingle");
  const qrColorSingleHex = document.getElementById("qrColorSingleHex");
  const qrColorGradStart = document.getElementById("qrColorGradStart");
  const qrColorGradStartHex = document.getElementById("qrColorGradStartHex");
  const qrColorGradEnd = document.getElementById("qrColorGradEnd");
  const qrColorGradEndHex = document.getElementById("qrColorGradEndHex");
  
  const gradientType = document.getElementById("gradientType");
  const gradientRotation = document.getElementById("gradientRotation");
  const gradRotVal = document.getElementById("gradRotVal");
  
  const customCornerColors = document.getElementById("customCornerColors");
  const customCornersPanel = document.getElementById("customCornersPanel");
  const cornerSquareColor = document.getElementById("cornerSquareColor");
  const cornerSquareHex = document.getElementById("cornerSquareHex");
  const cornerDotColor = document.getElementById("cornerDotColor");
  const cornerDotHex = document.getElementById("cornerDotHex");
  
  const qrBgColor = document.getElementById("qrBgColor");
  const qrBgColorHex = document.getElementById("qrBgColorHex");
  const transparentBg = document.getElementById("transparentBg");
  
  const predefinedStickers = document.getElementById("predefinedStickers");
  const uploadArea = document.getElementById("uploadArea");
  const customLogoInput = document.getElementById("customLogoInput");
  const uploadedFileInfo = document.getElementById("uploadedFileInfo");
  const uploadedFileName = document.getElementById("uploadedFileName");
  const removeLogoBtn = document.getElementById("removeLogoBtn");
  
  const logoOptionsPanel = document.getElementById("logoOptionsPanel");
  const logoSize = document.getElementById("logoSize");
  const logoSizeVal = document.getElementById("logoSizeVal");
  const logoMargin = document.getElementById("logoMargin");
  const logoMarginVal = document.getElementById("logoMarginVal");
  const hideDotsBehind = document.getElementById("hideDotsBehind");
  
  const presetsRow = document.querySelector(".presets-row");
  const exportFormatSelector = document.getElementById("exportFormatSelector");
  const exportSize = document.getElementById("exportSize");
  
  const downloadBtn = document.getElementById("downloadBtn");
  const copyBtn = document.getElementById("copyBtn");
  const themeToggleBtn = document.getElementById("themeToggleBtn");

  // Border & Frame DOM elements
  const borderMarginMode = document.getElementById("borderMarginMode");
  const borderMarginSizeRow = document.getElementById("borderMarginSizeRow");
  const borderMarginSize = document.getElementById("borderMarginSize");
  const borderMarginSizeVal = document.getElementById("borderMarginSizeVal");

  const frameTypeSelector = document.getElementById("frameTypeSelector");
  const frameOptionsPanel = document.getElementById("frameOptionsPanel");
  const frameLineStyle = document.getElementById("frameLineStyle");
  const frameWidth = document.getElementById("frameWidth");
  const frameWidthVal = document.getElementById("frameWidthVal");

  const inheritFrameColor = document.getElementById("inheritFrameColor");
  const customFrameColorWrapper = document.getElementById("customFrameColorWrapper");
  const frameColor = document.getElementById("frameColor");
  const frameColorHex = document.getElementById("frameColorHex");

  // State values
  let selectedDotType = "extra-rounded";
  let activeFormat = "png";
  let selectedBorderMarginMode = "flush";
  let selectedFrameType = "none";
  let selectedFrameLineStyle = "solid";

  // Create & mount the styling QR code instance
  qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    type: "canvas",
    data: qrTextInput.value || "https://google.com",
    image: "",
    qrOptions: {
      typeNumber: 0,
      mode: "Byte",
      errorCorrectionLevel: "H"
    },
    dotsOptions: {
      color: "#2b2d42",
      type: "extra-rounded"
    },
    backgroundOptions: {
      color: "#ffffff"
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 6,
      imageSizeFactor: 0.25,
      hideBackgroundDots: true
    },
    cornersSquareOptions: {
      type: "extra-rounded",
      color: "#2b2d42"
    },
    cornersDotOptions: {
      type: "dot",
      color: "#2b2d42"
    }
  });

  qrCode.append(document.getElementById("qrPreviewCanvas"));

  // Main QR Update function
  function updateQRCode() {
    // 1. Calculate margin sizes at 300px scale
    const userMargin = (selectedBorderMarginMode === "margin") ? parseInt(borderMarginSize.value, 10) : 0;
    const borderWidth = (selectedFrameType !== "none") ? parseInt(frameWidth.value, 10) : 0;
    const padding = 8;

    let qrMarginAt300 = 0;
    if (selectedBorderMarginMode === "margin") {
      qrMarginAt300 = padding + borderWidth + userMargin;
    } else {
      if (selectedFrameType !== "none") {
        qrMarginAt300 = padding + borderWidth;
      } else {
        qrMarginAt300 = 0;
      }
    }

    const config = {
      data: qrTextInput.value || " ", // empty space if cleared to prevent crash
      width: 300,
      height: 300,
      margin: qrMarginAt300,
      backgroundOptions: {},
      qrOptions: {
        errorCorrectionLevel: "H"
      },
      dotsOptions: {
        type: selectedDotType
      },
      cornersSquareOptions: {
        type: cornerSquareType.value
      },
      cornersDotOptions: {
        type: cornerDotType.value
      },
      image: activeLogoDataUrl,
      imageOptions: {
        margin: parseInt(logoMargin.value, 10),
        imageSizeFactor: parseFloat(logoSize.value) / 100,
        hideBackgroundDots: hideDotsBehind.checked
      }
    };

    // 1. Background Config
    if (transparentBg.checked) {
      config.backgroundOptions.color = "rgba(0,0,0,0)";
    } else {
      config.backgroundOptions.color = qrBgColor.value;
    }

    // 2. Colors and Gradients for Dots
    const colorMode = document.querySelector("#colorModeSelector .tab-btn.active").dataset.value;
    if (colorMode === "gradient") {
      config.dotsOptions.gradient = {
        type: gradientType.value,
        rotation: (parseInt(gradientRotation.value, 10) * Math.PI) / 180,
        colorStops: [
          { offset: 0, color: qrColorGradStart.value },
          { offset: 1, color: qrColorGradEnd.value }
        ]
      };
      // Delete single color option to let gradient render
      delete config.dotsOptions.color;
    } else {
      config.dotsOptions.color = qrColorSingle.value;
      config.dotsOptions.gradient = null;
    }

    // 3. Corners custom colors
    if (customCornerColors.checked) {
      config.cornersSquareOptions.color = cornerSquareColor.value;
      config.cornersDotOptions.color = cornerDotColor.value;
      config.cornersSquareOptions.gradient = null;
      config.cornersDotOptions.gradient = null;
    } else {
      // Inherit from dots single color or use gradient start color
      if (colorMode === "gradient") {
        config.cornersSquareOptions.color = qrColorGradStart.value;
        config.cornersDotOptions.color = qrColorGradEnd.value;
        config.cornersSquareOptions.gradient = null;
        config.cornersDotOptions.gradient = null;
      } else {
        config.cornersSquareOptions.color = qrColorSingle.value;
        config.cornersDotOptions.color = qrColorSingle.value;
        config.cornersSquareOptions.gradient = null;
        config.cornersDotOptions.gradient = null;
      }
    }

    const updatePromise = qrCode.update(config);
    if (updatePromise && typeof updatePromise.then === "function") {
      updatePromise.then(() => {
        const canvas = document.querySelector("#qrPreviewCanvas canvas");
        if (canvas) drawBorder(canvas, 1);
      });
    } else {
      setTimeout(() => {
        const canvas = document.querySelector("#qrPreviewCanvas canvas");
        if (canvas) drawBorder(canvas, 1);
      }, 100);
    }
  }

  // Draw styled outer border on canvas
  function drawBorder(canvas, scale) {
    if (selectedFrameType === "none") return;

    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;

    // Get border parameters at 300px scale
    const borderWidthAt300 = parseInt(frameWidth.value, 10);
    const paddingAt300 = 8;

    // Scale parameters
    const borderWidth = borderWidthAt300 * scale;
    const padding = paddingAt300 * scale;

    // Border bounding box coordinates
    const x1 = borderWidth / 2 + padding;
    const y1 = borderWidth / 2 + padding;
    const x2 = W - borderWidth / 2 - padding;
    const y2 = H - borderWidth / 2 - padding;
    const width = x2 - x1;
    const height = y2 - y1;

    ctx.save();
    
    // Set border line styles
    ctx.lineWidth = borderWidth;
    
    // Resolve border color
    let color = "#2b2d42";
    if (inheritFrameColor.checked) {
      const colorMode = document.querySelector("#colorModeSelector .tab-btn.active").dataset.value;
      if (colorMode === "gradient") {
        color = qrColorGradStart.value;
      } else {
        color = qrColorSingle.value;
      }
    } else {
      color = frameColor.value;
    }
    ctx.strokeStyle = color;

    // Line style (Solid vs Dashed)
    if (selectedFrameLineStyle === "dashed") {
      const dashLen = 8 * scale;
      const gapLen = 6 * scale;
      ctx.setLineDash([dashLen, gapLen]);
    } else {
      ctx.setLineDash([]);
    }

    ctx.beginPath();
    if (selectedFrameType === "square") {
      ctx.rect(x1, y1, width, height);
    } else if (selectedFrameType === "rounded") {
      const radius = 24 * scale;
      ctx.roundRect(x1, y1, width, height, radius);
    } else if (selectedFrameType === "twelve-indented") {
      // Twelve-indented corners (ย่อมุมไม้สิบสอง)
      const indent = Math.max(12 * scale, W * 0.07); // proportional indent
      const s = indent / 3; // step size

      // Start at top-middle
      ctx.moveTo((x1 + x2) / 2, y1);

      // Top-right corner steps
      ctx.lineTo(x2 - indent, y1);
      ctx.lineTo(x2 - indent + s, y1);
      ctx.lineTo(x2 - indent + s, y1 + s);
      ctx.lineTo(x2 - indent + 2 * s, y1 + s);
      ctx.lineTo(x2 - indent + 2 * s, y1 + 2 * s);
      ctx.lineTo(x2, y1 + 2 * s);
      ctx.lineTo(x2, y1 + indent);

      // Right side
      ctx.lineTo(x2, y2 - indent);

      // Bottom-right corner steps
      ctx.lineTo(x2, y2 - indent + s);
      ctx.lineTo(x2 - s, y2 - indent + s);
      ctx.lineTo(x2 - s, y2 - indent + 2 * s);
      ctx.lineTo(x2 - 2 * s, y2 - indent + 2 * s);
      ctx.lineTo(x2 - 2 * s, y2);
      ctx.lineTo(x2 - indent, y2);

      // Bottom side
      ctx.lineTo(x1 + indent, y2);

      // Bottom-left corner steps
      ctx.lineTo(x1 + indent - s, y2);
      ctx.lineTo(x1 + indent - s, y2 - s);
      ctx.lineTo(x1 + indent - 2 * s, y2 - s);
      ctx.lineTo(x1 + indent - 2 * s, y2 - 2 * s);
      ctx.lineTo(x1, y2 - 2 * s);
      ctx.lineTo(x1, y2 - indent);

      // Left side
      ctx.lineTo(x1, y1 + indent);

      // Top-left corner steps
      ctx.lineTo(x1, y1 + indent - s);
      ctx.lineTo(x1 + s, y1 + indent - s);
      ctx.lineTo(x1 + s, y1 + indent - 2 * s);
      ctx.lineTo(x1 + 2 * s, y1 + indent - 2 * s);
      ctx.lineTo(x1 + 2 * s, y1);
      ctx.lineTo(x1 + indent, y1);
      
      ctx.closePath();
    }

    ctx.stroke();
    ctx.restore();
  }

  // Bind reactive events

  // Text inputs
  qrTextInput.addEventListener("input", updateQRCode);
  clearTextBtn.addEventListener("click", () => {
    qrTextInput.value = "";
    qrTextInput.focus();
    updateQRCode();
  });

  // Dots Selector (Cards)
  dotTypeContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".selector-card");
    if (!card) return;
    
    dotTypeContainer.querySelectorAll(".selector-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    selectedDotType = card.dataset.value;
    updateQRCode();
  });

  // Select boxes
  cornerSquareType.addEventListener("change", updateQRCode);
  cornerDotType.addEventListener("change", updateQRCode);

  // Tab switch (Colors)
  colorModeSelector.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;

    colorModeSelector.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const mode = btn.dataset.value;
    if (mode === "gradient") {
      singleColorPanel.classList.remove("active");
      gradientColorPanel.classList.add("active");
    } else {
      singleColorPanel.classList.add("active");
      gradientColorPanel.classList.remove("active");
    }
    updateQRCode();
  });

  // Color Pickers sync with HEX text inputs
  function syncColorInput(picker, hexInput) {
    picker.addEventListener("input", (e) => {
      hexInput.value = e.target.value;
      updateQRCode();
    });
    hexInput.addEventListener("input", (e) => {
      let val = e.target.value.trim();
      // Auto-insert leading # if missing for 6-character hex codes
      if (val.length === 6 && !val.startsWith("#")) {
        val = "#" + val;
      }
      if (val.length === 7 && val.startsWith("#")) {
        picker.value = val;
        updateQRCode();
      }
    });
  }

  syncColorInput(qrColorSingle, qrColorSingleHex);
  syncColorInput(qrColorGradStart, qrColorGradStartHex);
  syncColorInput(qrColorGradEnd, qrColorGradEndHex);
  syncColorInput(cornerSquareColor, cornerSquareHex);
  syncColorInput(cornerDotColor, cornerDotHex);
  syncColorInput(qrBgColor, qrBgColorHex);
  syncColorInput(frameColor, frameColorHex);

  // Gradient parameters
  gradientType.addEventListener("change", (e) => {
    const rotContainer = document.getElementById("gradientRotationContainer");
    if (e.target.value === "radial") {
      rotContainer.style.opacity = "0.5";
      rotContainer.style.pointerEvents = "none";
    } else {
      rotContainer.style.opacity = "1";
      rotContainer.style.pointerEvents = "all";
    }
    updateQRCode();
  });

  gradientRotation.addEventListener("input", (e) => {
    gradRotVal.textContent = e.target.value + "°";
    updateQRCode();
  });

  // Custom corners checkbox toggle
  customCornerColors.addEventListener("change", (e) => {
    if (e.target.checked) {
      customCornersPanel.classList.add("active");
    } else {
      customCornersPanel.classList.remove("active");
    }
    updateQRCode();
  });

  // Transparent Background toggle
  transparentBg.addEventListener("change", (e) => {
    const wrapper = qrBgColor.closest(".color-picker-wrapper");
    if (e.target.checked) {
      wrapper.style.opacity = "0.5";
      wrapper.style.pointerEvents = "none";
    } else {
      wrapper.style.opacity = "1";
      wrapper.style.pointerEvents = "all";
    }
    updateQRCode();
  });

  // Stickers Selection
  predefinedStickers.addEventListener("click", (e) => {
    const card = e.target.closest(".sticker-card");
    if (!card) return;

    predefinedStickers.querySelectorAll(".sticker-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    const stickerName = card.dataset.sticker;
    if (stickerName === "none") {
      activeLogoDataUrl = "";
      logoOptionsPanel.classList.remove("active");
    } else {
      const stickerData = STICKERS[stickerName];
      // If it is already a base64 Data URL (like the cropped PNG logo), use it directly.
      // Otherwise, convert the raw SVG markup to a base64 Data URL.
      if (stickerData.startsWith("data:image/")) {
        activeLogoDataUrl = stickerData;
      } else {
        activeLogoDataUrl = svgToDataUrl(stickerData);
      }
      logoOptionsPanel.classList.add("active");
      
      // Hide uploaded file info if you select preset sticker
      uploadedFileInfo.classList.remove("active");
      customLogoInput.value = "";
    }
    updateQRCode();
  });

  // Logo uploading drag-and-drop & file selection
  uploadArea.addEventListener("click", () => customLogoInput.click());

  // Prevent default drag styles
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    uploadArea.addEventListener(eventName, (e) => e.preventDefault(), false);
  });

  uploadArea.addEventListener('dragover', () => {
    uploadArea.style.borderColor = "var(--accent-color)";
    uploadArea.style.background = "var(--accent-light)";
  });

  uploadArea.addEventListener('dragleave', () => {
    uploadArea.style.borderColor = "var(--input-border)";
    uploadArea.style.background = "var(--card-inactive)";
  });

  uploadArea.addEventListener("drop", (e) => {
    uploadArea.style.borderColor = "var(--input-border)";
    uploadArea.style.background = "var(--card-inactive)";
    
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files.length > 0) {
      handleLogoFile(files[0]);
    }
  });

  customLogoInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      handleLogoFile(e.target.files[0]);
    }
  });

  function handleLogoFile(file) {
    if (!file.type.startsWith("image/")) {
      alert("กรุณาอัปโหลดไฟล์รูปภาพเท่านั้นนะค้าา 🌸");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      activeLogoDataUrl = e.target.result;
      
      // Update file list UI
      uploadedFileName.textContent = file.name;
      uploadedFileInfo.classList.add("active");
      logoOptionsPanel.classList.add("active");
      
      // Clear predefined sticker active state
      predefinedStickers.querySelectorAll(".sticker-card").forEach(c => c.classList.remove("active"));
      predefinedStickers.querySelector("[data-sticker='none']").classList.add("active");
      
      updateQRCode();
    };
    reader.readAsDataURL(file);
  }

  // Remove logo button
  removeLogoBtn.addEventListener("click", () => {
    activeLogoDataUrl = "";
    customLogoInput.value = "";
    uploadedFileInfo.classList.remove("active");
    logoOptionsPanel.classList.remove("active");
    updateQRCode();
  });

  // Logo Sliders
  logoSize.addEventListener("input", (e) => {
    logoSizeVal.textContent = e.target.value + "%";
    updateQRCode();
  });

  logoMargin.addEventListener("input", (e) => {
    logoMarginVal.textContent = e.target.value + "px";
    updateQRCode();
  });

  hideDotsBehind.addEventListener("change", updateQRCode);

  // Borders & Frames Event Listeners
  borderMarginMode.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;

    borderMarginMode.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedBorderMarginMode = btn.dataset.value;

    if (selectedBorderMarginMode === "margin") {
      borderMarginSizeRow.style.display = "block";
    } else {
      borderMarginSizeRow.style.display = "none";
    }
    updateQRCode();
  });

  borderMarginSize.addEventListener("input", (e) => {
    borderMarginSizeVal.textContent = e.target.value + "px";
    updateQRCode();
  });

  frameTypeSelector.addEventListener("click", (e) => {
    const card = e.target.closest(".sticker-card");
    if (!card) return;

    frameTypeSelector.querySelectorAll(".sticker-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    selectedFrameType = card.dataset.frame;

    if (selectedFrameType !== "none") {
      frameOptionsPanel.classList.add("active");
    } else {
      frameOptionsPanel.classList.remove("active");
    }
    updateQRCode();
  });

  frameLineStyle.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;

    frameLineStyle.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedFrameLineStyle = btn.dataset.value;
    updateQRCode();
  });

  frameWidth.addEventListener("input", (e) => {
    frameWidthVal.textContent = e.target.value + "px";
    updateQRCode();
  });

  inheritFrameColor.addEventListener("change", (e) => {
    if (e.target.checked) {
      customFrameColorWrapper.style.display = "none";
    } else {
      customFrameColorWrapper.style.display = "block";
    }
    updateQRCode();
  });

  // Preset themes activation
  presetsRow.addEventListener("click", (e) => {
    const btn = e.target.closest(".preset-badge");
    if (!btn) return;

    const themeName = btn.dataset.theme;
    const theme = PRESET_THEMES[themeName];
    if (!theme) return;

    // Apply shapes
    selectedDotType = theme.dotType;
    dotTypeContainer.querySelectorAll(".selector-card").forEach(c => {
      if (c.dataset.value === theme.dotType) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });

    cornerSquareType.value = theme.cornerSquareType;
    cornerDotType.value = theme.cornerDotType;

    // Apply colors mode
    colorModeSelector.querySelectorAll(".tab-btn").forEach(b => {
      if (b.dataset.value === theme.colorMode) {
        b.classList.add("active");
      } else {
        b.classList.remove("active");
      }
    });

    if (theme.colorMode === "gradient") {
      singleColorPanel.classList.remove("active");
      gradientColorPanel.classList.add("active");
      
      qrColorGradStart.value = theme.gradStart;
      qrColorGradStartHex.value = theme.gradStart;
      qrColorGradEnd.value = theme.gradEnd;
      qrColorGradEndHex.value = theme.gradEnd;
      
      gradientType.value = theme.gradType;
      gradientRotation.value = theme.gradRot;
      gradRotVal.textContent = theme.gradRot + "°";
    } else {
      singleColorPanel.classList.add("active");
      gradientColorPanel.classList.remove("active");
      
      qrColorSingle.value = theme.singleColor;
      qrColorSingleHex.value = theme.singleColor;
    }

    // Custom corners
    customCornerColors.checked = theme.customCorners;
    if (theme.customCorners) {
      customCornersPanel.classList.add("active");
      cornerSquareColor.value = theme.cornerSquareColor;
      cornerSquareHex.value = theme.cornerSquareColor;
      cornerDotColor.value = theme.cornerDotColor;
      cornerDotHex.value = theme.cornerDotColor;
    } else {
      customCornersPanel.classList.remove("active");
    }

    // Background
    transparentBg.checked = theme.transparentBg;
    qrBgColor.value = theme.bgColor;
    qrBgColorHex.value = theme.bgColor;
    
    // Reset background opacity styles
    qrBgColor.closest(".color-picker-wrapper").style.opacity = theme.transparentBg ? "0.5" : "1";
    qrBgColor.closest(".color-picker-wrapper").style.pointerEvents = theme.transparentBg ? "none" : "all";

    // Reset borders and frames on preset change
    selectedBorderMarginMode = "flush";
    borderMarginMode.querySelectorAll(".tab-btn").forEach(b => {
      if (b.dataset.value === "flush") b.classList.add("active");
      else b.classList.remove("active");
    });
    borderMarginSizeRow.style.display = "none";
    borderMarginSize.value = 20;
    borderMarginSizeVal.textContent = "20px";

    selectedFrameType = "none";
    frameTypeSelector.querySelectorAll(".sticker-card").forEach(c => {
      if (c.dataset.frame === "none") c.classList.add("active");
      else c.classList.remove("active");
    });
    frameOptionsPanel.classList.remove("active");
    
    selectedFrameLineStyle = "solid";
    frameLineStyle.querySelectorAll(".tab-btn").forEach(b => {
      if (b.dataset.value === "solid") b.classList.add("active");
      else b.classList.remove("active");
    });
    frameWidth.value = 3;
    frameWidthVal.textContent = "3px";
    inheritFrameColor.checked = true;
    customFrameColorWrapper.style.display = "none";

    updateQRCode();
  });

  // Export File Format Tab selector
  exportFormatSelector.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;

    exportFormatSelector.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFormat = btn.dataset.value;

    // JPG format does not support transparency. Disable transparent toggle if active.
    if (activeFormat === "jpg") {
      if (transparentBg.checked) {
        transparentBg.checked = false;
        // Restore background color opacity
        const wrapper = qrBgColor.closest(".color-picker-wrapper");
        wrapper.style.opacity = "1";
        wrapper.style.pointerEvents = "all";
        updateQRCode();
      }
      transparentBg.disabled = true;
      transparentBg.closest(".toggle-container").style.opacity = "0.5";
      transparentBg.closest(".toggle-container").style.cursor = "not-allowed";
    } else {
      transparentBg.disabled = false;
      transparentBg.closest(".toggle-container").style.opacity = "1";
      transparentBg.closest(".toggle-container").style.cursor = "pointer";
    }
  });

  // Download Trigger
  downloadBtn.addEventListener("click", async () => {
    // Show loading style or text change
    const originalText = downloadBtn.innerHTML;
    downloadBtn.innerHTML = `<i data-lucide="loader" class="animate-spin"></i><span>กำลังประมวลผล...</span>`;
    lucide.createIcons();

    const size = parseInt(exportSize.value, 10);
    
    try {
      // Calculate scaled margin
      const userMargin = (selectedBorderMarginMode === "margin") ? parseInt(borderMarginSize.value, 10) : 0;
      const borderWidth = (selectedFrameType !== "none") ? parseInt(frameWidth.value, 10) : 0;
      const padding = 8;

      let qrMarginAt300 = 0;
      if (selectedBorderMarginMode === "margin") {
        qrMarginAt300 = padding + borderWidth + userMargin;
      } else {
        if (selectedFrameType !== "none") {
          qrMarginAt300 = padding + borderWidth;
        } else {
          qrMarginAt300 = 0;
        }
      }

      const scale = size / 300;
      const scaledMargin = Math.round(qrMarginAt300 * scale);

      // 1. Temporarily increase width/height for high resolution download
      const updatePromise = qrCode.update({
        width: size,
        height: size,
        margin: scaledMargin
      });

      if (updatePromise && typeof updatePromise.then === "function") {
        await updatePromise;
      } else {
        await new Promise(resolve => setTimeout(resolve, 250));
      }

      // Draw border at high resolution scale
      const canvas = document.querySelector("#qrPreviewCanvas canvas");
      if (canvas) {
        drawBorder(canvas, scale);
      }

      // 2. Trigger download
      await qrCode.download({
        name: "narak-qr",
        extension: activeFormat
      });
    } catch (err) {
      console.error(err);
      alert("เกิดข้อผิดพลาดในการดาวน์โหลดรูปภาพ");
    } finally {
      // 3. Restore back to screen layout size
      updateQRCode();
      downloadBtn.innerHTML = originalText;
      lucide.createIcons();
    }
  });

  // Copy to Clipboard feature
  copyBtn.addEventListener("click", async () => {
    const canvas = document.querySelector("#qrPreviewCanvas canvas");
    if (!canvas) {
      alert("ยังไม่พบภาพคิวอาร์โค้ด กรุณาลองใหม่อีกครั้ง");
      return;
    }

    try {
      canvas.toBlob(async (blob) => {
        if (!blob) {
          alert("ไม่สามารถสร้างรูปภาพเพื่อคัดลอกได้");
          return;
        }

        try {
          // Use modern Clipboard API to copy image blob
          const item = new ClipboardItem({ "image/png": blob });
          await navigator.clipboard.write([item]);
          
          // Show quick Toast or text change notification
          const originalHTML = copyBtn.innerHTML;
          copyBtn.innerHTML = `<i data-lucide="check"></i><span>คัดลอกแล้ว!</span>`;
          copyBtn.style.borderColor = "#2a9d8f";
          copyBtn.style.color = "#2a9d8f";
          lucide.createIcons();

          setTimeout(() => {
            copyBtn.innerHTML = originalHTML;
            copyBtn.style.borderColor = "";
            copyBtn.style.color = "";
            lucide.createIcons();
          }, 2000);
        } catch (clipErr) {
          console.error("Clipboard write error: ", clipErr);
          alert("บราวเซอร์ของคุณไม่รองรับการคัดลอกภาพโดยตรง กรุณากดดาวน์โหลดแทนนะค้าา 🌸");
        }
      }, "image/png");
    } catch (err) {
      console.error(err);
      alert("เกิดข้อผิดพลาดในการคัดลอกรูปภาพ");
    }
  });

  // Theme Toggle Button Logic
  themeToggleBtn.addEventListener("click", () => {
    const htmlEl = document.documentElement;
    const currentTheme = htmlEl.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    
    htmlEl.setAttribute("data-theme", newTheme);
    localStorage.setItem("narak-qr-theme", newTheme);
  });

  // Check saved theme from localStorage
  const savedTheme = localStorage.getItem("narak-qr-theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  // Perform initial trigger to sync fields
  updateQRCode();
});
