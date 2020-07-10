import React, { useState } from "react";

import { Container, Row, Col } from "../components/Grid";
import JumboTron from "../components/JumboTron";
import SearchBox from "../components/SearchBox";
import Button from "../components/Button";
import { BookList, BookListItem } from "../components/BookList";
import API from "../utils/API";

function SearchPg() {
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");

  const handleInputChange = event => {
    const { value } = event.target;
    setBookSearch(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    API.search(bookSearch)
      .then(res => setBooks(res.data.items))
      .catch(err => console.log(err));
  }

  const handleSaveBook = id => {
    const book = books.find(book => book.id === id);

    API.saveBook({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      link: book.volumeInfo.infoLink,
      image: book.volumeInfo.imageLinks.thumbnail
    })
      .then(() => { alert(`${book.volumeInfo.title} was saved to your library!`) }
      );
  }

  return (
    <>
      <Container>
        <Row>
          <Col size="md-12">
            <JumboTron>
              <h1 className="display-4 jumboText">Google Book Search</h1>
              <br></br>

              <a className="jumboText" href="https://developers.google.com/books" target="blank">Powered by Google Books API</a>
            </JumboTron>
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <SearchBox
                      name="BookSearch"
                      value={bookSearch}
                      onChange={handleInputChange}
                      placeholder="Search for a Book"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={handleFormSubmit}
                      type="success"
                      className="input-lg">
                      Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-10">
            <BookList>
              {books.map(book => (
                <BookListItem
                  key={book.id}
                  title={book.volumeInfo.title}
                  authors={
                    !book.volumeInfo.authors ? "No author listed" : book.volumeInfo.authors.join(", ")
                  }
                  description={book.volumeInfo.description}
                  link={book.volumeInfo.infoLink}
                  image={
                    !book.volumeInfo.imageLinks ? "https://placehold.it/100x100" : book.volumeInfo.imageLinks.thumbnail
                  }

                  Button={() => (
                    <button
                      onClick={() => handleSaveBook(book.id)}
                      className="btn saveBtn">
                      Save
                    </button>

                  )}
                />
              ))}
            </BookList>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SearchPg;
