import React, { useState } from 'react';
import CSInterface from '../../lib/cep/csinterface';
import { Button } from '@adobe/react-spectrum';

interface RGBColor {
  r: number;
  g: number;
  b: number;
}

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>("#000000");

  const applyColorInIllustrator = (isFill: boolean = true) => {
    const csInterface = new CSInterface();

    const rgbColor = hexToRgb(color);

    if (!rgbColor) return;

    const script = `
      if (app.documents.length > 0) {
        var doc = app.activeDocument;
        var color = new RGBColor();
        color.red = ${rgbColor.r};
        color.green = ${rgbColor.g};
        color.blue = ${rgbColor.b};
        
        if (${isFill}) {
          doc.defaultFillColor = color;
        } else {
          doc.defaultStrokeColor = color;
        }
      } else {
        alert("No Open Document");
      }
    `;

    csInterface.evalScript(script, (result: string) => {
      console.log("Risultato dello script:", result);
    });
  };

  const hexToRgb = (hex: string): RGBColor | null => {
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };

  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <Button onPress={() => applyColorInIllustrator(true)} variant='cta'>Apply Fill Color</Button>
      <Button onPress={() => applyColorInIllustrator(false)} variant='cta'>Apply Stroke Color</Button>
    </div>
  );
};

export default ColorPicker;
