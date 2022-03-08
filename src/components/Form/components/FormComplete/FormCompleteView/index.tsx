import React from "react";
import { Container } from "../../../../Container";
import { FormDataProps } from "../../../types";
import InputMask from "react-input-mask";
import * as Styles from "./styles";
type FormCompleteViewProps = {
  data: FormDataProps;
  message: string;
  loading: boolean;
  handleChangeData: (data: FormDataProps) => void;
  onSubmit: (event: React.SyntheticEvent) => void;
};

const _FormCompleteView = ({
  data,
  message,
  loading,
  handleChangeData,
  onSubmit,
}: FormCompleteViewProps) => {
  return (
    <Styles.Container>
      <h4>Agora você pode criar sua própria marca!</h4>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <input
              onChange={(e) =>
                handleChangeData({ ...data, name: e.target.value })
              }
              value={data.name}
              placeholder="Nome completo"
              required
            />
            <input
              onChange={(e) =>
                handleChangeData({ ...data, email: e.target.value })
              }
              placeholder="Email"
              value={data.email}
              type="email"
              required
            />
            <InputMask
              onChange={(e) =>
                handleChangeData({ ...data, phone: e.target.value })
              }
              placeholder="Telefone"
              value={data.phone}
              required
              mask="+55\ 99 9999 99999"
            />
            <span>Você já trabalha no mercado de encapsulados?</span>
            <select
              required
              value={data.visited}
              onChange={(e) =>
                handleChangeData({ ...data, visited: e.target.value })
              }
            >
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>

            <button
              disabled={loading}
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
            >
              {loading ? "ENVIANDO..." : "ENVIAR"}
            </button>

            {message && <span className="form-status">{message}</span>}
          </div>
        </form>
      </div>
    </Styles.Container>
  );
};

export const FormCompleteView = React.memo(_FormCompleteView);
