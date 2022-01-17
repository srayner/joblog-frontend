import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export default function SimpleContainer() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#eeeeee', height: '100vh' }} />
      </Container>
    </>
  )
}