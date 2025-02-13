import { Tool } from "@/pages";
import Button from "./Button";

interface DialogProps {
    open: boolean,
    onClose: () => void,
    tool?: Tool
}

const Dialog = ({ open, onClose, tool }: DialogProps) => {
    if (!open || !tool) return null;
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-5/6">
          <div className="text-violet-700 flex mb-5 justify-center">{tool.icon}</div>
          <h2 className="text-xl text-violet-700 font-bold">{tool.details.title}</h2>
          <p className="mt-2 text-violet-500">{tool.details.description}</p>
          <ul className="pl-5 mt-2">
            {tool.details.features.map((feature, index) => (
              <li key={index} className="text-black flex items-center">
                <span className="text-violet-500 mr-2">&#9733;</span>
                {feature}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-semibold">{tool.details.idealFor}</p>
          <Button variant="default" onClick={onClose}>Fechar</Button>
        </div>
      </div>
    );
  }

export default Dialog;