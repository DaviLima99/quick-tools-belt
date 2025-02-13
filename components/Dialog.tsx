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
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold">{tool.details.title}</h2>
          <p className="mt-2">{tool.details.description}</p>
          <ul className="list-disc pl-5 mt-2">
            {tool.details.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p className="mt-4 font-semibold">{tool.details.idealFor}</p>
          <Button variant="outline" onClick={onClose}>Fechar</Button>
        </div>
      </div>
    );
  }

export default Dialog;
  