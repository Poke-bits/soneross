import { useState } from "react";
import { formTemplate } from "../pages/chamado";
export function useForm(steps: Array<React.JSX.Element>) {
    const [etapaAtual, setEtapa] = useState(0)
    function mudancaStep(i: number, e, formTemplate: formTemplate) {
        if (e) e.preventDefault()
        if (i < 0 || i >= steps.length)
            return

        setEtapa(i)
    }
    return { etapaAtual, componentAtual: steps[etapaAtual], mudancaStep,
         primeiraEtapa: etapaAtual === 0 ? true : false,
          segundaEtapa: etapaAtual === 1 ? true : false,
           terceiraEtapa: etapaAtual === 2,
        quartaEtapa:etapaAtual===3 }
}