import { useState } from "react";
import img1 from "../assets/message-multiple-02.png";
import img2 from "../assets/market-analysis.png";
import img3 from "../assets/sent.png";
import img4 from "../assets/pencil-edit-02.png";
import { Link } from "react-router-dom";

const TwinHome = () => {
  const [userQuery, setUserQuery] = useState(""); // State to track the user query
  const [aiResponse, setAiResponse] = useState(""); // State to store the AI response
  const [loading, setLoading] = useState(false); // State to track loading state

  // Function to handle the API request
  const handleSubmit = async () => {
    if (!userQuery) return; // Do nothing if query is empty
    setLoading(true);

    try {
      const response = await fetch("https://llama.us.gaianet.network/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: userQuery,
        }),
      });

      const data = await response.json();
      setAiResponse(data.choices[0].message.content); // Assuming this is the correct path to the AI response
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setAiResponse("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(241, 241, 241, 1)",
        paddingBottom: "2rem",
      }}
    >
      <section
        className=" pt-4"
        style={{
          paddingLeft: "5rem",
          paddingRight: "5rem",
          borderBottom: "1px solid rgba(217, 217, 217, 1)",
        }}
      >
        {/* UI elements */}
      </section>

      <section className="">
        <div style={{ marginTop: "5rem", textAlign: "center" }}>
          <h1 style={{ fontWeight: "600", fontSize: "36px", color: "rgba(1,1,1,1,)" }}>
            Hello, There!
          </h1>
          <h2 style={{ fontWeight: "500", fontSize: "24px", color: "rgba(139, 139, 139, 1)" }}>
            How Can I Help You Today?
          </h2>
          <p style={{ fontWeight: "400", fontSize: "14px", color: "rgba(98,98,98,1)" }}>
            Kariya uses the latest AI models & insights from our AI research
            database to produce evidence-based answers <br /> about human
            rights related to Gender Based Violence.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          {/* Other UI elements */}
        </div>
      </section>

      {/* AI Chat Section */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <p
          style={{
            color: "rgba(156, 156, 156, 1)",
            fontWeight: "400",
            fontSize: "12px",
          }}
        >
          AI can make mistakes. Check for important information.
        </p>

        <div style={{ position: "relative", width: "800px" }}>
          <img
            src={img4}
            alt="Image"
            style={{
              border: "1px solid rgba(156, 156, 156, 1)",
              borderRadius: "32px",
              padding: "10px",
              position: "absolute",
              left: "15px",
              top: "15%",
              height: "40px",
              width: "40px",
            }}
          />

          {/* Textarea for user query */}
          <textarea
            className="form-control"
            placeholder="Ask me anything..."
            aria-label="Search"
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)} // Update the query
            rows="2"
            style={{
              width: "100%",
              borderRadius: "48px",
              height: "64px",
              textAlign: "start",
              fontSize: "16px",
              fontWeight: "400",
              backgroundColor: "rgba(241, 241, 241, 1)",
              paddingTop: "1rem",
              paddingLeft: "70px",
              paddingRight: "70px",
              resize: "none",
              overflowWrap: "break-word",
            }}
          />

          {/* Send button */}
          <button className="btn" onClick={handleSubmit} disabled={loading}>
            <img
              src={img3}
              alt="Image"
              style={{
                border: "1px solid rgba(74, 144, 226, 1)",
                borderRadius: "32px",
                padding: "10px",
                backgroundColor: "rgba(74, 144, 226, 1)",
                position: "absolute",
                right: "15px",
                top: "15%",
                height: "40px",
                width: "40px",
              }}
            />
          </button>
        </div>

        {/* Display the AI response */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          aiResponse && (
            <div style={{ marginTop: "20px", fontWeight: "600", fontSize: "16px" }}>
              <p>AI Response: {aiResponse}</p>
            </div>
          )
        )}
      </section>

      <section>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Footer links */}
        </div>
      </section>
    </div>
  );
};

export default TwinHome;
