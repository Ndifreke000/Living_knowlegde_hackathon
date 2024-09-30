import React, { useState } from 'react';
import img1 from "../assets/message-multiple-02.png";
import img2 from "../assets/market-analysis.png";
import img3 from "../assets/sent.png";
import img4 from "../assets/pencil-edit-02.png";
import { Link } from "react-router-dom";

const handleSubmit = async (e) => {
  e.preventDefault();
  const nodeID = "0x5022e298b9d6a347764e3130096b266590369c44"; // Your Node ID

  try {
    const res = await fetch('https://llama.us.gaianet.network/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Node-ID': nodeID // Include Node ID in headers if required
      },
      body: JSON.stringify({
        prompt: `You are a hybrid of Elon Musk and Warren Buffet and my personal revenue distribution assistant.\nUser: ${userInput}\n`, // Update prompt structure
        max_tokens: 150, // Adjust as needed
        temperature: 0.7 // Optional, adjust based on desired creativity
      })
    });

    const data = await res.json();
    if (res.ok) {
      setResponse(data.choices[0].text); // Update this based on the actual response structure
    } else {
      console.error('Error:', data);
      setResponse('Error fetching data. Please try again later.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    setResponse('Error fetching data. Please try again later.');
  }
};

      const data = await res.json();
      setResponse(data.choices[0].message.content); // Update this based on the actual response structure
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponse('Error fetching data. Please try again later.');
    }
  };

  return (
    <>
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "15px" }}>
              <a
                href=""
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "rgba(1,1,1,1)",
                }}
              >
                Co-Authoring
              </a>
              <a
                href=""
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "rgba(1,1,1,1)",
                }}
              >
                Insights
              </a>
              <div
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  border: "1px solid white",
                  borderTopLeftRadius: "30px",
                  borderTopRightRadius: "30px",
                  backgroundColor: "white",
                  transform: "translateY(-10px)",
                }}
              >
                <Link
                  to="/twinHome2"
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    margin: 0,
                    textDecoration: "none",
                  }}
                >
                  Ask AI
                </Link>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "5px",
                color: "blue",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              <a
                href=""
                style={{
                  textDecoration: "none",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
              >
                Emergency Help line
              </a>
              <i className="bi bi-question-circle"></i>
            </div>
          </div>
        </section>

        <section className="">
          <div style={{ marginTop: "5rem", textAlign: "center" }}>
            <h1
              style={{
                fontWeight: "600",
                fontSize: "36px",
                color: "rgba(1,1,1,1,)",
              }}
            >
              Hello, There!
            </h1>
            <h2
              style={{
                fontWeight: "500",
                fontSize: "24px",
                color: "rgba(139, 139, 139, 1)",
              }}
            >
              How Can I Help You Today?
            </h2>
            <p
              style={{
                flexDirection: "column",
                fontWeight: "400",
                fontSize: "14px",
                color: "rgba(98,98,98,1)",
              }}
            >
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "332px",
                height: "245px",
                padding: "24px",
                border: "1px solid rgba(217, 217, 217, 1)",
                borderRadius: "24px",
                backgroundColor: "rgba(217, 217, 217, 1)",
              }}
            >
              <img
                src={img1}
                alt="Image"
                style={{
                  border: "1px solid rgba(233, 233, 233, 1)",
                  borderRadius: "48px",
                  padding: "10px",
                  backgroundColor: "rgba(233, 233, 233, 1)",
                }}
              />
              <h3 style={{ fontWeight: "600", fontSize: "16px" }}>
                Information Retrieval
              </h3>
              <hr />
              <ul>
                <li style={{ fontWeight: "600", fontSize: "12px" }}>
                  <strong>Answer Questions:</strong> Provide factual information
                  based on a vast knowledge base.
                </li>

                <li style={{ fontWeight: "600", fontSize: "12px" }}>
                  <strong>Summarise Text:</strong> Condense long documents
                  <br /> or articles into shorter summaries.
                </li>
              </ul>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "332px",
                height: "245px",
                padding: "20px",
                border: "1px solid rgba(217, 217, 217, 1)",
                borderRadius: "24px",
                backgroundColor: "rgba(217, 217, 217, 1)",
              }}
            >
              <img
                src={img2}
                alt="Image"
                style={{
                  border: "1px solid rgba(233, 233, 233, 1)",
                  borderRadius: "48px",
                  padding: "10px",
                  backgroundColor: "rgba(233, 233, 233, 1)",
                }}
              />
              <h3 style={{ fontWeight: "600", fontSize: "16px" }}>
                Data Analysis
              </h3>
              <hr />
              <ul>
                <li
                  style={{
                    fontWeight: "600",
                    fontSize: "12px",
                    display: "flex",
                  }}
                >
                  <strong>Analyze Data:</strong> Interpret and provide insights
                  <br />
                  from datasets.
                </li>

                <li
                  style={{
                    fontWeight: "600",
                    fontSize: "12px",
                    display: "flex",
                  }}
                >
                  <strong>Generate Reports:</strong> Create detailed reports
                  <br />
                  based on data analysis.
                </li>
              </ul>
            </div>
          </div>
        </section>

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
                paddingLeft: "10px",
                paddingRight: "5px",
                height: "40px",
                width: "40px",
              }}
            />
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                placeholder="Type your question here..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                style={{
                  width: "100%",
                  height: "40px",
                  border: "1px solid rgba(217, 217, 217, 1)",
                  borderRadius: "16px",
                  paddingLeft: "50px",
                }}
              />
              <button
                type="submit"
                style={{
                  width: "100px",
                  height: "40px",
                  border: "none",
                  borderRadius: "16px",
                  backgroundColor: "blue",
                  color: "white",
                }}
              >
                Ask
              </button>
            </form>
            <div>
              <p style={{ color: "black", marginTop: "10px" }}>{response}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TwinHome;
