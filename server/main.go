package main

import (
    "net/http"
	"fmt"
)

func main() {
    http.HandleFunc("/downloads", func(w http.ResponseWriter, r *http.Request) {
        http.Redirect(w, r, "/dashboard/", http.StatusMovedPermanently)
    })

    fs := http.FileServer(http.Dir("src/pages"))
    http.Handle("/dashboard/", http.StripPrefix("/dashboard", fs))

	fmt.Println("Hello, world!")
    err := http.ListenAndServe(":8080", nil)

    if err != nil {
        panic(err)
    }
}