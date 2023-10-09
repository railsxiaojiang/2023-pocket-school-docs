<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme'
</script>

<template>
  <div class="sponsor-topbar">💡 技术支持</div>
  <div class="sponsor-list">

  </div>
</template>

<style scoped>

.sponsor-topbar {
  margin-top: 2rem;
  border-top: 1px solid var(--vp-c-gutter);
}

.sponsor-topbar,
.user-topbar {
  padding: 1rem 0;
  text-align: center;
}

.sponsor-desc {
  padding: 1rem 0;
  line-height: 24px;
  font-size: 16px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  text-align: center;
}

.sponsor-list,
.user-list {
  display: flex;
  width: 100%;
  justify-content: center;
}

.sponsor-item,
.user-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 60px;
  padding: 10px 30px;
  border: 1px solid transparent;
  border-radius: 4px;
  border-color: var(--vp-button-sponsor-border);
  border-color: var(--vp-c-brand);
  border-color: var(--vp-c-gutter);
  background-color: var(--vp-c-bg-soft);
  background-color: white;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
  cursor: pointer;
}

.sponsor-item:hover,
.user-item:hover {
  border-color: var(--vp-button-sponsor-hover-border);
}

.sponsor-item img {
  object-fit: contain;
}

.action {
  display: flex;
  justify-content: center;
  gap: 1rem;
  /* padding-top: 4rem; */
}

.sponsor {
  /* .VPButton */
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
  /* .VPButton.medium */
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  /* .VPButton.sponsor */
  border-color: var(--vp-button-sponsor-border);
  color: var(--vp-button-sponsor-text);
  background-color: var(--vp-button-sponsor-bg);
}

.sponsor:hover {
  /* .VPButton.sponsor:hover */
  border-color: var(--vp-button-sponsor-hover-border);
  color: var(--vp-button-sponsor-hover-text);
  background-color: var(--vp-button-sponsor-hover-bg);
}
</style>
