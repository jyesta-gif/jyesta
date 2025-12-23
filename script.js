// --- CONFIGURATION --- //
const CONFIG = {
    // Paste your new PDF URL here
    pdfUrl: "https://jyesta-lms-certificates.s3.ap-south-1.amazonaws.com/certificates/internship/JC-20250913-MBK08BBW.pdf"
};

// --- LOGIC (Do not edit below) --- //

// 1. Setup Download Button
function downloadCertificate() {
    window.open(CONFIG.pdfUrl, "_blank");
}

// 2. Setup PDF Viewer (Google Docs Viewer)
window.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('cert-preview');
    if (iframe) {
        // Encode the URL for Google Viewer
        const encodedUrl = encodeURIComponent(CONFIG.pdfUrl);
        iframe.src = `https://docs.google.com/gview?url=${encodedUrl}&embedded=true`;
    }
});
