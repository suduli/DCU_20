import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedFormat, setSelectedFormat] = useState('jpg');
  const [currentView, setCurrentView] = useState('presentation');

  const dataFiles = {
    jpg: '/data/Introduction_My Roles and Responsibility.jpg',
    svg: '/data/Introduction_My Roles and Responsibility.svg',
    pdf: '/data/Introduction_My Roles and Responsibility.pdf',
    pptx: '/data/Introduction_My Roles and Responsibility.pptx',
    odp: '/data/Introduction_My Roles and Responsibility.odp'
  };

  const handleFormatChange = (format) => {
    setSelectedFormat(format);
  };

  const handleDownload = (format) => {
    const link = document.createElement('a');
    link.href = dataFiles[format];
    link.download = `Introduction_My Roles and Responsibility.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>DCU_20 Project</h1>
        <h2>My Roles and Responsibility</h2>
        <p>Interactive presentation showcase</p>
      </header>

      <nav className="navigation">
        <button 
          className={currentView === 'presentation' ? 'active' : ''}
          onClick={() => setCurrentView('presentation')}
        >
          Presentation
        </button>
        <button 
          className={currentView === 'downloads' ? 'active' : ''}
          onClick={() => setCurrentView('downloads')}
        >
          Downloads
        </button>
        <button 
          className={currentView === 'about' ? 'active' : ''}
          onClick={() => setCurrentView('about')}
        >
          About
        </button>
      </nav>

      <main className="main-content">
        {currentView === 'presentation' && (
          <div className="presentation-view">
            <div className="format-selector">
              <h3>Choose Format:</h3>
              <div className="format-buttons">
                <button 
                  className={selectedFormat === 'jpg' ? 'active' : ''} 
                  onClick={() => handleFormatChange('jpg')}
                >
                  Image (JPG)
                </button>
                <button 
                  className={selectedFormat === 'svg' ? 'active' : ''} 
                  onClick={() => handleFormatChange('svg')}
                >
                  Vector (SVG)
                </button>
                <button 
                  className={selectedFormat === 'pdf' ? 'active' : ''} 
                  onClick={() => handleFormatChange('pdf')}
                >
                  PDF Document
                </button>
              </div>
            </div>

            <div className="content-viewer">
              {selectedFormat === 'jpg' && (
                <div className="image-viewer">
                  <img 
                    src={dataFiles.jpg} 
                    alt="My Roles and Responsibility" 
                    className="presentation-image"
                  />
                </div>
              )}
              
              {selectedFormat === 'svg' && (
                <div className="svg-viewer">
                  <object 
                    data={dataFiles.svg} 
                    type="image/svg+xml" 
                    className="presentation-svg"
                  >
                    <img src={dataFiles.jpg} alt="Fallback presentation" />
                  </object>
                </div>
              )}
              
              {selectedFormat === 'pdf' && (
                <div className="pdf-viewer">
                  <iframe 
                    src={dataFiles.pdf} 
                    className="presentation-pdf"
                    title="PDF Presentation"
                  />
                  <p className="pdf-note">
                    If the PDF doesn't display, you can <a href={dataFiles.pdf} target="_blank" rel="noopener noreferrer">open it in a new tab</a>.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {currentView === 'downloads' && (
          <div className="downloads-view">
            <h3>Download Presentation Files</h3>
            <div className="download-grid">
              {Object.entries(dataFiles).map(([format, url]) => (
                <div key={format} className="download-card">
                  <div className="download-info">
                    <h4>{format.toUpperCase()}</h4>
                    <p>
                      {format === 'jpg' && 'JPEG Image Format'}
                      {format === 'svg' && 'Scalable Vector Graphics'}
                      {format === 'pdf' && 'Portable Document Format'}
                      {format === 'pptx' && 'PowerPoint Presentation'}
                      {format === 'odp' && 'OpenDocument Presentation'}
                    </p>
                  </div>
                  <button 
                    className="download-btn"
                    onClick={() => handleDownload(format)}
                  >
                    Download {format.toUpperCase()}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === 'about' && (
          <div className="about-view">
            <h3>About This Project</h3>
            <div className="about-content">
              <p>
                This interactive website showcases the "My Roles and Responsibility" presentation 
                from the DCU_20 project. The presentation is available in multiple formats to 
                ensure accessibility and compatibility across different platforms and use cases.
              </p>
              
              <h4>Available Formats:</h4>
              <ul>
                <li><strong>JPG Image:</strong> High-quality raster image for quick viewing</li>
                <li><strong>SVG Vector:</strong> Scalable vector graphics for any resolution</li>
                <li><strong>PDF Document:</strong> Professional document format with multiple pages</li>
                <li><strong>PowerPoint (PPTX):</strong> Editable presentation format</li>
                <li><strong>OpenDocument (ODP):</strong> Open-source presentation format</li>
              </ul>

              <h4>Features:</h4>
              <ul>
                <li>Interactive format switching</li>
                <li>Direct file downloads</li>
                <li>Responsive design for all devices</li>
                <li>Professional presentation layout</li>
              </ul>

              <h4>Technology Stack:</h4>
              <ul>
                <li>React.js for the user interface</li>
                <li>Modern CSS for styling and responsiveness</li>
                <li>HTML5 for semantic markup</li>
              </ul>
            </div>
          </div>
        )}
      </main>

      <footer className="App-footer">
        <p>&copy; 2025 DCU_20 Project - Built with React</p>
      </footer>
    </div>
  );
}

export default App;
