const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const sourcePath = path.join(__dirname, 'public/assets/lumatic_logo_optimized_.png');
  const publicDir = path.join(__dirname, 'public');

  try {
    // Read the source image
    const sourceImage = sharp(sourcePath);
    const metadata = await sourceImage.metadata();
    
    console.log('Source image dimensions:', metadata.width, 'x', metadata.height);

    // Generate apple-touch-icon.png (180x180)
    console.log('Generating apple-touch-icon.png (180x180)...');
    await sourceImage
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✓ apple-touch-icon.png created');

    // Generate favicon-16x16.png
    console.log('Generating favicon-16x16.png...');
    await sourceImage
      .resize(16, 16, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png'));
    console.log('✓ favicon-16x16.png created');

    // Generate favicon-32x32.png
    console.log('Generating favicon-32x32.png...');
    await sourceImage
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png'));
    console.log('✓ favicon-32x32.png created');

    // Generate favicon-48x48.png
    console.log('Generating favicon-48x48.png...');
    await sourceImage
      .resize(48, 48, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(publicDir, 'favicon-48x48.png'));
    console.log('✓ favicon-48x48.png created');

    console.log('\n✓ All favicon files generated successfully!');
    console.log('\nNote: For the multi-size favicon.ico file, you can:');
    console.log('1. Use an online converter like https://favicon.io/favicon-converter/');
    console.log('2. Upload the generated PNG files (16x16, 32x32, 48x48)');
    console.log('3. Download the favicon.ico and place it in the /public/ directory');
    console.log('\nAlternatively, favicon-32x32.png will work for most modern browsers.');

  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
