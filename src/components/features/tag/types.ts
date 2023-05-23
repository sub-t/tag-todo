export type TagId = string;
export type TagData = {
  name: string;
};

export type TagSchema = {
  id: TagId;
} & TagData;
export type TagItemProps = TagSchema;

export type DeleteTagDTO = { id: TagId };
