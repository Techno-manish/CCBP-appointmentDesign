import StarRateIcon from "@mui/icons-material/StarRate";

const StarRating = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.1rem" }}>
    {[...Array(4)].map((_, index) => (
      <StarRateIcon
        key={index}
        style={{ color: "#F79624", fontSize: "1rem" }}
      />
    ))}
  </div>
);

export default StarRating;
