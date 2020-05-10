// # Level 07: ReturnType

// ## random

namespace Level07A {
  function random(): number {
    return Math.random();
  }

  type RandomReturnType = ReturnType<typeof random>;
}

// ## getBlogById => useful if function has implicit return type

namespace Level07B {
  function getBlogById(blogId: string) {
    return {
      id: blogId,
      authorId: "42",
      title: "Coronavirus",
      content: "Coronavirus is no longer a threat",
      // Try to comment one property and see what happens to `GetBlogByIdReturnType`
    };
  }

  type GetBlogByIdReturnType = ReturnType<typeof getBlogById>;
}

// ## getBlogById => useful if function has inline return type

namespace Level07C {
  function getPersonById(personId: string): { id: string; name: string } {
    return {
      id: personId,
      name: "John",
      // Try to comment one property and see what happens to `GetPersonByIdReturnType`
    };
  }

  type GetPersonByIdReturnType = ReturnType<typeof getPersonById>;
}
