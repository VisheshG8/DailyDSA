const cubeAreaAndVolume = (a) => {
    // Calculate surface area and volume
    const surface_area = 6 * (a * a);
    const volume = a * a * a;
    // Print in the required format
    console.log(`${surface_area} ${volume}`);
}

// Dynamic input handling for competitive programming
process.stdin.on("data", (data) => {
    const a = parseInt(data.toString().trim(), 10); // Parse the input
    cubeAreaAndVolume(a); // Call the function
});
