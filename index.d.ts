import * as React from 'react'

type IsRequiredOrAsTextOption = {
  required?: boolean,
  asText?: boolean,
}

type BaseSchemaType<TOptions> = ((x: unknown) => boolean)
  & { _isSchemaType: true, _type: string, } & TOptions
type SchemaTypeFactory<TOptions> = (options?: TOptions) => BaseSchemaType<TOptions>

type StringSchemaTypeFactory = SchemaTypeFactory<IsRequiredOrAsTextOption>
type StringSchemaType = BaseSchemaType<IsRequiredOrAsTextOption>

type BooleanSchemaTypeFactory = SchemaTypeFactory<IsRequiredOrAsTextOption>
type BooleanSchemaType = BaseSchemaType<IsRequiredOrAsTextOption>

type NumberSchemaTypeFactory = SchemaTypeFactory<IsRequiredOrAsTextOption>
type NumberSchemaType = BaseSchemaType<IsRequiredOrAsTextOption>

type FunctionSchemaTypeFactory = SchemaTypeFactory<IsRequiredOrAsTextOption>
type FunctionSchemaType = BaseSchemaType<IsRequiredOrAsTextOption>

type DateSchemaTypeFactory = SchemaTypeFactory<IsRequiredOrAsTextOption>
type DateSchemaType = BaseSchemaType<IsRequiredOrAsTextOption>

type ArraySchemaTypeFactory = SchemaTypeFactory<IsRequiredOrAsTextOption>
type ArraySchemaType = BaseSchemaType<IsRequiredOrAsTextOption>

type AnyObjectSchemaTypeFactory = SchemaTypeFactory<IsRequiredOrAsTextOption>
type AnyObjectSchemaType = BaseSchemaType<IsRequiredOrAsTextOption>

type ArrayOfSchemaTypeFactory = (type: SchemaType) => SchemaTypeFactory<IsRequiredOrAsTextOption>
type ArrayOfSchemaType = BaseSchemaType<IsRequiredOrAsTextOption>

type AnySchemaTypeFactory = SchemaTypeFactory<IsRequiredOrAsTextOption>
type AnySchemaType = BaseSchemaType<IsRequiredOrAsTextOption>

interface ObjectSchemaType {
  [key: string]: SchemaType,
}

type SchemaType =
  StringSchemaType
  | BooleanSchemaType
  | NumberSchemaType
  | FunctionSchemaType
  | DateSchemaType
  | ArraySchemaType
  | AnyObjectSchemaType
  | ArrayOfSchemaType
  | AnySchemaType
  | ObjectSchemaType

export const SchemaTypes: {
  any: AnySchemaTypeFactory,
  string: StringSchemaTypeFactory,
  boolean: BooleanSchemaTypeFactory,
  function: FunctionSchemaTypeFactory,
  number: NumberSchemaTypeFactory,
  date: DateSchemaTypeFactory,
  array: ArraySchemaTypeFactory,
  object: AnyObjectSchemaTypeFactory,
  arrayOf: ArrayOfSchemaTypeFactory,
}

export const matchesSchema: (schema: SchemaType, test: unknown) => boolean

type BaseEditorProps = {
  type: SchemaType,
  className?: string,
}

type EditablePrimitive = number | string | boolean

interface EditableObject {
  [key: string]: Editable,
}

interface EditableArray {
  [key: number]: Editable,
}

type Editable = EditablePrimitive | EditableObject | EditableArray

export class ObjectEditor<TObject extends Editable> extends React.Component<BaseEditorProps & {
  object?: TObject,
  onUpdateElement: (object: TObject) => void,
  onPreviewElement: (object: TObject) => void,
  parentVisible?: boolean,
}> {
}

export class ArrayEditor<TObject extends Editable> extends React.Component<BaseEditorProps & {
  object?: Array<TObject>,
  onUpdateElement: (object: TObject, index: number) => void,
  onPreviewElement: (object: TObject, index: number) => void,
  onRemoveElements: (indices: Array<number>) => void,
  onAddElement: (object: TObject) => void,
  parentVisible?: boolean,
  defaultRowsPerPage?: number,
}> {
}

export const PropTypes: {
  SchemaType: unknown, // TODO
  Schema: unknown, // TODO
}
