import { Input, InputNumber } from "antd";
import FormItem from "antd/lib/form/FormItem";
import React from "react";
import { ContactItem } from "../../types/Contact";

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: "number" | "text";
  record: ContactItem;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  children,
  ...restprops
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;

  return (
    <td {...restprops}>
      {editing ? (
        <FormItem
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[{ required: true, message: `Please Input ${title}` }]}
        >
          {inputNode}
        </FormItem>
      ) : (
        children
      )}
    </td>
  );
};

export default EditableCell;
