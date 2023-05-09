import React from "react"
import { useForm } from "react-hook-form"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Button from "@mui/material/Button"
import { Container } from "@mui/material"
import styled from "@emotion/styled"
import { toast } from "react-toastify"

const sendEmail = async (formData) => {
  var data = {
    service_id: process.env.NEXT_PUBLIC_JSEMAIL_SERVICE_ID,
    template_id: process.env.NEXT_PUBLIC_JSEMAIL_TEMPLATE_ID,
    user_id: process.env.NEXT_PUBLIC_JSEMAIL_USER_ID,
    template_params: {
      message: formData.description,
      subject: formData.subject,
      from_name: formData.email,
    },
  }

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return response
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const rs = await sendEmail(data)
    if (rs.status === 200) {
      toast("Mesajul a fost trimis", { type: "success" })
    } else {
      toast("Incercati mai tarziu", { type: "error" })
    }

    // Clear the form fields after submission (optional)
    setValue("subject", "")
    setValue("description", "")
    setValue("email", "")
    setValue("acceptTerms", false)
  }

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6">Întrebări</Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        Rubrica ”Întrebări” este destinată soluționării litigiilor din diverse ramuri ale
        drepturilor.{" "}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Subject"
            variant="outlined"
            fullWidth
            {...register("subject", { required: true })}
            error={errors.subject ? true : false}
            helperText={errors.subject && "Subject is required"}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            {...register("description", { required: true })}
            error={errors.description ? true : false}
            helperText={errors.description && "Description is required"}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
            })}
            error={errors.email ? true : false}
            helperText={errors.email && "Valid email is required"}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" {...register("acceptTerms", { required: true })} />}
            label="I accept the terms and conditions"
          />
          {errors.acceptTerms && (
            <Typography color="error">You must accept the terms and conditions</Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;

  .image {
    background-image: url("/jujdge.png");
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`

export const QuestionsForm = () => {
  return (
    <Wrapper>
      <Container>
        <ContactForm />
      </Container>
      <Container>
        <div className="image"></div>
      </Container>
    </Wrapper>
  )
}
