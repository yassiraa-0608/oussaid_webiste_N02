# 📸 Image Management Guide - Oussaid Tourism Website

This guide explains how to add, change, or manage images on your website manually without needing a developer.

---

## 📁 Where Are Images Stored?

All images are stored in the following folder:

```
/src/assets/
```

### Current Images in the Project:

- `hero-marrakech.jpg` - Main homepage hero image
- `agafay-hero.jpg` - Agafay activities hero image
- `palmeraie-hero.jpg` - Palmeraie activities hero image
- `placeholder.webp` - Default placeholder for services
- `logo.png` - Full logo with text
- `logo-icon.png` - Small icon logo

---

## 🖼️ How to Add or Change Images

### Step 1: Prepare Your Images

1. **Image Format**: Use `.jpg`, `.png`, or `.webp` formats
2. **Image Size**:
   - Hero images: 1920x1080px (recommended)
   - Service images: 800x600px (recommended)
   - Logo: 200x60px (recommended)
3. **File Size**: Keep images under 500KB for fast loading
4. **File Names**: Use lowercase with hyphens (e.g., `desert-tour.jpg`)

### Step 2: Add Images to Your Project

**Option A: Using Your Code Editor (VS Code, etc.)**

1. Open your project folder
2. Navigate to: `src/assets/`
3. Copy your new images into this folder
4. Make sure the filename is descriptive (e.g., `merzouga-desert.jpg`)

**Option B: Using File Explorer (Windows/Mac)**

1. Navigate to your project folder on your computer
2. Go to: `your-project-name/src/assets/`
3. Paste your images here

---

## 🔧 How to Use Images in Your Website

### For Hero Images (Homepage, Activities Pages)

**File Location**: Open the page file you want to edit
- Homepage: `/src/pages/Home.tsx`
- Activities: `/src/pages/AgafayActivities.tsx`, `/src/pages/PalmeraieActivities.tsx`

**What to Change**:

Find this line at the top:
```javascript
import heroImage from '@/assets/hero-marrakech.jpg';
```

Change `hero-marrakech.jpg` to your new image name:
```javascript
import heroImage from '@/assets/my-new-hero.jpg';
```

---

### For Service Images (Tours, Activities)

**File Location**: `/src/data/services.ts`

**What to Change**:

1. First, import your image at the top of the file:
```javascript
import merzougaImage from '@/assets/merzouga-desert.jpg';
import zagораImage from '@/assets/zagora-desert.jpg';
```

2. Find the service you want to update (search for the service ID or title)

3. Change the `image` property:

**Before:**
```javascript
{
  id: 'merzouga-tour',
  title: 'Merzouga Desert Tour',
  image: placeholderImage,  // ← Change this
  ...
}
```

**After:**
```javascript
{
  id: 'merzouga-tour',
  title: 'Merzouga Desert Tour',
  image: merzougaImage,  // ← Your imported image
  ...
}
```

---

### For Gallery Images (Multiple Images per Service)

In the same `/src/data/services.ts` file, each service has a `gallery` array:

**Before:**
```javascript
gallery: [placeholderImage, placeholderImage, placeholderImage],
```

**After:**
```javascript
gallery: [merzougaImage1, merzougaImage2, merzougaImage3],
```

**Remember**: Import all images at the top first:
```javascript
import merzougaImage1 from '@/assets/merzouga-1.jpg';
import merzougaImage2 from '@/assets/merzouga-2.jpg';
import merzougaImage3 from '@/assets/merzouga-3.jpg';
```

---

## 🚀 Complete Example: Adding Images to a Tour

Let's say you want to add real images to the **Merzouga Desert Tour**:

### Step 1: Add Images to Folder

Add these files to `/src/assets/`:
- `merzouga-main.jpg`
- `merzouga-gallery-1.jpg`
- `merzouga-gallery-2.jpg`
- `merzouga-gallery-3.jpg`

### Step 2: Open `/src/data/services.ts`

### Step 3: Import Images at the Top

Add these lines after the existing imports:
```javascript
import merzougaMain from '@/assets/merzouga-main.jpg';
import merzougaGallery1 from '@/assets/merzouga-gallery-1.jpg';
import merzougaGallery2 from '@/assets/merzouga-gallery-2.jpg';
import merzougaGallery3 from '@/assets/merzouga-gallery-3.jpg';
```

### Step 4: Update the Service

Find the Merzouga tour object and update it:

```javascript
{
  id: 'merzouga-tour',
  category: 'tour',
  title: 'Merzouga Desert Tour',
  // ... other properties ...
  image: merzougaMain,  // ← Main display image
  gallery: [merzougaGallery1, merzougaGallery2, merzougaGallery3],  // ← Gallery images
}
```

### Step 5: Save and Build

1. Save all files
2. Run: `npm run build`
3. If successful, deploy to Netlify

---

## 📋 Quick Reference Table

| Image Type | Location | File to Edit | Image Size |
|------------|----------|--------------|------------|
| Homepage Hero | `/src/assets/` | `/src/pages/Home.tsx` | 1920x1080px |
| Activity Hero | `/src/assets/` | `/src/pages/[Activity].tsx` | 1920x1080px |
| Tour/Activity Card | `/src/assets/` | `/src/data/services.ts` | 800x600px |
| Gallery Images | `/src/assets/` | `/src/data/services.ts` | 800x600px |
| Logo | `/src/assets/` | `/src/components/Navbar.tsx` | 200x60px |

---

## 🎯 Best Practices

### ✅ DO:
- Use descriptive file names: `merzouga-sunset.jpg` not `IMG_1234.jpg`
- Compress images before uploading (use [TinyPNG](https://tinypng.com/))
- Use WebP format for best performance
- Keep consistent image dimensions for similar types
- Test on mobile after changing images

### ❌ DON'T:
- Don't use spaces in file names (use hyphens instead)
- Don't use special characters (é, à, ñ, etc.)
- Don't upload very large images (over 1MB)
- Don't forget to import images before using them
- Don't delete the `placeholder.webp` file (it's a fallback)

---

## 🔄 After Making Changes

1. **Save all files** you edited
2. **Run the build command** in your terminal:
   ```bash
   npm run build
   ```
3. **Check for errors** - if the build succeeds, you're good!
4. **Deploy to Netlify** - push to GitHub or use Netlify's deploy interface
5. **Test the live site** - verify images load correctly

---

## ❓ Troubleshooting

### Image Not Showing?

**Check:**
1. ✅ File is in `/src/assets/` folder
2. ✅ Import statement is correct at top of file
3. ✅ File name matches exactly (case-sensitive!)
4. ✅ Image variable name matches in the code
5. ✅ Build command ran successfully

### Build Failing?

**Common Issues:**
- Missing import statement
- Typo in file name or path
- Image file name has spaces or special characters
- Forgot to save files before building

---

## 📞 Need Help?

If you're stuck:

1. Double-check the file name and path
2. Make sure you saved all files
3. Try `npm run build` to see the error message
4. Check that the image file actually exists in `/src/assets/`

---

## 🌐 Useful Online Tools

- **Image Compression**: [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- **Image Resizing**: [ResizeImage.net](https://resizeimage.net/)
- **Convert to WebP**: [CloudConvert](https://cloudconvert.com/jpg-to-webp)
- **Image Optimization**: [ImageOptim](https://imageoptim.com/) (Mac) or [FileOptimizer](https://nikkhokkho.sourceforge.io/static.php?page=FileOptimizer) (Windows)

---

## 📝 Summary

1. Add images to `/src/assets/`
2. Import them in the file you want to use them
3. Reference the imported variable name in your code
4. Build and deploy
5. Test on the live site

**That's it!** You now have full control over all images on your website. 🎉
