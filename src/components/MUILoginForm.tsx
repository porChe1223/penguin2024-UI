import { Button, FormControl, TextField } from "@mui/material";
export const MUILoginForm = () => {
  return (
    <FormControl
      sx={{
        padding: "32px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "8px",
        backgroundColor: "white",
        gap: "16px",
      }}
    >
      <TextField label="ユーザー名" className="" />
      <TextField label="パスワード" type="password" />
      <Button variant="contained" type="submit">
        ログイン
      </Button>
    </FormControl>
  );
};
