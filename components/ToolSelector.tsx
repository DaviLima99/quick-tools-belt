import { useState } from 'react';

const ToolSelector = ({ tools }) => {
  const [selectedTool, setSelectedTool] = useState(tools[0]);

  const handleToolChange = (tool) => {
    setSelectedTool(tool);
  };

  return (
    <div>
      <h2>Selecione uma ferramenta:</h2>
      <ul>
        {tools.map((tool) => (
          <li key={tool.id}>
            <button
              onClick={() => handleToolChange(tool)}
              className={`px-6 py-4 bg-violet-500 text-white rounded hover:bg-violet-600 transition-colors duration-300 ${
                selectedTool.id === tool.id ? 'bg-violet-600' : ''
              }`}
            >
              {tool.name}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Ferramenta selecionada: {selectedTool.name}</h2>
        <p>{selectedTool.description}</p>
        <ul>
          {selectedTool.details.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToolSelector;