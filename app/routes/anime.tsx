import * as React from "react"
import { Link } from "remix"
import Typography from "@mui/material/Typography"

interface IAnimeProps {}

const Anime: React.FC<IAnimeProps> = (props: IAnimeProps) => {
  const {} = props
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Anime Detail Page
      </Typography>
    </>
  )
}

export default Anime