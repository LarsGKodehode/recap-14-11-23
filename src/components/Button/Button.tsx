import React from "react"

type Props = {
  children: React.ReactNode
  onClick: () => void
}

export function Button(props: Props) {
  return (
    <button>{props.children}</button>
  )
}