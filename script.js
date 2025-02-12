function swatchTime() {
    let date = new Date();
    let utc_hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let seconds = date.getUTCSeconds();
    let milliseconds = date.getUTCMilliseconds();

    let bmt_hours = utc_hours + 1; // Convert to Biel Mean Time (BMT)
    let swatch = (((bmt_hours * 60 + minutes) * 60 + seconds) * 1000 + milliseconds) / 86400; // Swatch beats (@000 to @999)
    
    swatch %= 1000;

    // Update all elements with class "swatch"
    document.querySelectorAll('.swatch').forEach(el => {
        el.innerHTML = `@${swatch.toFixed(2)}`;
    });

    
}

// Update every 10 milliseconds for smooth display
setInterval(swatchTime, 10);
