import { ref, onDeactivated, computed } from 'vue';
import { useData, useRoute } from 'vitepress';
import { ensureStartingSlash } from 'vitepress/dist/client/theme-default/utils';

export function useHash() {
  let pageHash = ref(window?.location.hash.replace('#', ''));
  const { page } = useData();
  const pathName = computed(() => {
    return page.value?.relativePath;
  });

  const componentsName = computed(() => {
    const pathArr = ensureStartingSlash(page.value?.relativePath).split('/');
    return pathArr[pathArr.length - 2];
  });

  window.addEventListener('hashchange', () => {
    pageHash.value = window?.location.hash.replace('#', '');
  });

  onDeactivated(() => {
    window.removeEventListener('hashchange');
  });

  return {
    pageHash,
    pathName,
    componentsName,
  };
}
