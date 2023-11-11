interface Props {
  text?: string
}

const DraftTag = ({ text = 'Draft' }: Props) => {
  return (
    <div className="float-right rounded bg-slate-500 px-2 py-1 text-sm font-medium uppercase text-slate-100">
      {text}
    </div>
  )
}

export default DraftTag
