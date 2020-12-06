<template>
  <div>
    <!-- Section Bar -->
    <SectionBar :image="sectionBar.image" :sectionName="sectionBar.sectionName" />
    <!----------------- -->
    <v-sheet width="100%" height="100%" elevation="15" class="pa-5">
      <v-treeview v-model="tree" :open="initiallyOpen" :items="items" activatable item-key="name" open-on-click>
        <template v-slot:prepend="{ item, open }">
          <v-icon v-if="!item.file">
            {{ open ? "mdi-folder-open" : "mdi-folder" }}
          </v-icon>
          <v-icon v-else>
            {{ files[item.file] }}
          </v-icon>
        </template>
      </v-treeview>
    </v-sheet>
  </div>
</template>

<script>
import SectionBar from "../components/SectionBar";

export default {
  name: "Documents",
  components: {
    SectionBar,
  },
  data() {
    return {
      initiallyOpen: ["public"],
      files: {
        html: "mdi-language-html5",
        js: "mdi-nodejs",
        json: "mdi-code-json",
        md: "mdi-language-markdown",
        pdf: "mdi-file-pdf",
        png: "mdi-file-image",
        txt: "mdi-file-document-outline",
        xls: "mdi-file-excel",
      },
      tree: [],
      items: [
        {
          name: "Files",
        },
        {
          name: "Contracts",
        },
        {
          name: "public",
          children: [
            {
              name: "Users",
              children: [
                {
                  name: "userPicture.png",
                  file: "png",
                },
              ],
            },
            {
              name: "Database-England.xls",
              file: "xls",
            },
            {
              name: "Database-Spain.xls",
              file: "xls",
            },
          ],
        },
        {
          name: "Reports.txt",
          file: "txt",
        },
        {
          name: "Salaries.txt",
          file: "txt",
        },
        {
          name: "web.html",
          file: "html",
        },
        {
          name: "UPDATES.md",
          file: "md",
        },
        {
          name: "Presentation-1.ppt",
          file: "ppt",
        },
        {
          name: "Solution-1.sap",
          file: "sap",
        },
      ],
      sectionBar: {
        image: require("../assets/img/imgbar6.jpg"),
        sectionName: "My documents",
      },
    };
  },
};
</script>

<style></style>
