import { Form, Input } from "antd";
import { useForm, Controller, useFormContext } from "react-hook-form";

type TSFInputProps = {
  name: string;
  type: string;
  id: string;
  label: string;
};

const SFInput = ({ name, type, label }: TSFInputProps) => {
  // const { control } = useFormContext();
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item labelCol={{ span: 24 }} layout="vertical" label={label}>
          <Input className="" {...field} type={type} id={name} />{" "}
        </Form.Item>
      )}
    />
  );
};

export default SFInput;
