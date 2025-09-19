# DCU_20 - Interactive Presentation Website

An interactive React-based website that showcases the "My Roles and Responsibility" presentation with multiple format support and professional design.

![Website Screenshot](https://github.com/user-attachments/assets/29b43084-e565-46f7-9f69-4b83ab65745c)

## Features

- **Interactive Format Switching**: View the presentation in JPG, SVG, or PDF formats
- **Multi-Format Downloads**: Download presentation files in 5 different formats (JPG, SVG, PDF, PPTX, ODP)
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Professional UI**: Modern gradient design with smooth animations
- **Three Main Sections**:
  - **Presentation**: Interactive viewer with format selection
  - **Downloads**: Easy access to all file formats
  - **About**: Project information and technical details

## Technology Stack

- **React.js**: Modern JavaScript framework for building user interfaces
- **CSS3**: Advanced styling with gradients, animations, and responsive design
- **HTML5**: Semantic markup for accessibility and SEO
- **Create React App**: Optimized build setup with hot reloading

## Available Presentation Formats

1. **JPG Image**: High-quality raster image (960x540 pixels) for quick viewing
2. **SVG Vector**: Scalable vector graphics for crisp display at any resolution
3. **PDF Document**: Multi-page professional document format (19 pages)
4. **PowerPoint (PPTX)**: Editable Microsoft PowerPoint presentation
5. **OpenDocument (ODP)**: Open-source presentation format compatible with LibreOffice

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/suduli/DCU_20.git
   cd DCU_20
   ```

2. Navigate to the website directory:
   ```bash
   cd website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `build` directory and can be deployed to any static hosting service.

### Deployment

You can deploy the built application to various platforms:

- **GitHub Pages**: Use the `build` folder
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **Any static hosting**: Upload the contents of the `build` folder

## Project Structure

```
DCU_20/
├── data/                           # Original presentation files
│   ├── Introduction_My Roles and Responsibility.jpg
│   ├── Introduction_My Roles and Responsibility.svg
│   ├── Introduction_My Roles and Responsibility.pdf
│   ├── Introduction_My Roles and Responsibility.pptx
│   └── Introduction_My Roles and Responsibility.odp
├── website/                        # React application
│   ├── public/
│   │   ├── data/                   # Copied presentation files
│   │   └── index.html
│   ├── src/
│   │   ├── App.js                  # Main React component
│   │   ├── App.css                 # Comprehensive styling
│   │   └── index.js                # React entry point
│   ├── build/                      # Production build (after npm run build)
│   └── package.json
├── README.md
└── LICENSE
```

## Usage

### Viewing the Presentation

1. **Format Selection**: Click on the format buttons (Image, Vector, PDF) to switch between different viewing modes
2. **Navigation**: Use the top navigation bar to switch between Presentation, Downloads, and About sections
3. **Downloads**: Click any download button to save the presentation in your preferred format

### Responsive Design

The website automatically adapts to different screen sizes:
- **Desktop**: Full layout with side-by-side elements
- **Tablet**: Adjusted layout with stacked elements
- **Mobile**: Single-column layout with touch-friendly buttons

## Contributing

This project is part of the DCU_20 academic project. For any improvements or suggestions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**Suduli Kumar Balabantaray**  
Project: DCU_20  
Built with ❤️ using React.js

---

*This interactive website was developed to showcase professional presentation materials in an accessible and user-friendly format.*