const courseContainer = document.getElementById("courseContainer");
const searchInput = document.getElementById("searchInput");const themeToggle = document.getElementById("themeToggle");

function setupThemeToggle() {
  const savedTheme = localStorage.getItem("sampleTheme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle?.setAttribute("aria-pressed", "true");
  }

  themeToggle?.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("sampleTheme", isDark ? "dark" : "light");
    themeToggle.setAttribute("aria-pressed", String(isDark));
  });
}
function filterCourses() {
  const searchValue = searchInput.value.trim().toLowerCase();
  const categoryValue = categoryFilter.value;

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.name.toLowerCase().includes(searchValue) || course.description.toLowerCase().includes(searchValue);
    const matchesCategory = categoryValue === "all" || course.level === categoryValue;
    return matchesSearch && matchesCategory;
  });

  renderCourses(filteredCourses);
}
function initHomePage() {
  if (!courseContainer || !searchInput || !categoryFilter) {
    return;
  }

  populateCategories();
  renderCourses(courses);

  searchInput.addEventListener("keyup", filterCourses);
  categoryFilter.addEventListener("change", filterCourses);
}

setupThemeToggle();
initHomePage();

document.addEventListener('DOMContentLoaded', () =>{
  const perfume =document.getElementById('Atr2');
  const infoBox =document.getElementById('infoBox');

  perfume.addEventListener('click',() =>{
    if(infoBox.style.display === 'none'){
      infoBox.style.display='block';

    }else{
      infoBox.style.display='none';
    }
  });
});
