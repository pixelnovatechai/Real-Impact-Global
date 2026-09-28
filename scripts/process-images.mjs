import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';

const IMAGES = [
  {
    name: 'deep_sea_water_hero.png',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfatcKi_-wbnk6yrBaAHHxoJ1ZoZJSlzyTKC_QXN6Oe_nV1OiH0IIUdD-T8eTGfmd_nosLUkPi1szOPWASQHjWUWG1xNeKg_Qp6rk9sj-d61P708h4jszWjaSEnbnqqO9-swnynorm2_jNJkiCreqEHmM0tMS16jxfFbJO2FHTPyrlOaTm4MKFzakKtgnmJqNTbCeF6ERg1U46YtnIM1E2yh7Eqaixeqc9Upi9VpiVdPfgJU_VayyR72h9nelASIBsGq4'
  },
  {
    name: 'magnesium_spray_hero.png',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8GWy7sZm0D_WwxhUaZieqk9rppGVGGt9QvomS9cARpKNp9fx3wOz4MLR_JcAMwQSHe8lLJMQULF5GQVDXQRvBi8K_FfAgmhApZailB5Jnux8acD4NSOKb4bOBdg2VeR5JzhtzbwknczuWUmwVj5EI_-dOATdITbopQ72YRhWBC78kLSibmyoRT6yy2TxikYMX2AC6wD41wRz50_xYLLrF8PCpJPSBU7gwUih7oMi1VDXbsnwKUVjET7_D84zCiUoR15U'
  },
  {
    name: 'deep_sea_water_showcase.png',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADT_Ng51apyOSeAJL6koTZqcKoEWMg0DCsa6QQIcxTKDmh2k8IDjbW1olRZvrBNuv5rm3qevHASJTHYI4FJGtPTythWCBb4RLSCN8LmRju6UzEpf5KfDpT9K9BFufENutcdoakxA5ZuuSOjJg3dpr0kr_OxDUYRSgK2D42UZxjyoilC6hUEZEr5scZkRJrhNRZm49i4sCjpCKaq81eZdMQ83GNlkEVwgeQs3lnfNvlpNku_zoBkswehMVX2Y5R0GOv-qo'
  },
  {
    name: 'magnesium_spray_showcase.png',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfM4uWNKqzSY5cf5-iSWWMt8njE4E7lNNLhuksDqE6bfjsjJdYrMAwYKlZanUN_91s_vLI1sK6QYDQwOxqfSC2F7pghnNiMCHgApaXnJveruC_RLWaDs5UdB0bHMt0Roqr8dHbSEzXJU5m52FuN24djWYfKZDK2cmgCKlTRRzws-hb23o2Grzt3-7oAHPWcAPUjA0iZP8QzsN8UmKR97zChOBiEQkEXRzFh7vf9bjlbGbjDr_FkrEGMLr47a0TySy2MRU'
  },
  {
    name: 'deep_sea_water_product.png',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATDQiJ69i0nTU8DuDzaof2Jw69i3S26fhFPySE0iD_45QPXjLpg4fv7NAFKVp2vzjI5rrF7D8pDp3LFiqiTAt6r5aWu3qonzxWaAwyDFMzRHOpmtupZ4jWU_-fcRLODjd3K--Hr7D7qJBZAOFWRn07tkFJc2Fd6AfdapWjPlw_exHftCDoLe85nPdwPQHl_xlhGPhv147EqED-Ey743MIRQLfUseI471dARPFOV_iF8fbZBDb_DrREkKjDIfMjMIUErYc'
  },
  {
    name: 'magnesium_spray_product.png',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB08DjCuW58qPmPU9CbcVUb8CJKqQsOYISfp5WEgKRD3d1ciFgKL6DlkX7zhF2wi3G_ZrgSFUhZhg0aQg1pJlBxJ0DZ7FhVSuv6CTz4QiGs4FRd-cBHB4fp__BQwxTg_R2qaVaf7fHCAgwy_fpMSqxzRA09iKMqSu79Np45AWO1rQFgu6_Mu4vYkU8JwYuzviEwyHxpUrVkf1KZ_M6l1vppbkKbRP44hnuG6kZDVkyZ8u3ZnL22M8LqPGnVDXgl42UHro'
  }
];

const outDir = path.resolve(process.cwd(), 'public/products');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function removeBackground(item) {
  console.log(`Processing ${item.name}...`);
  const res = await fetch(item.url);
  const buffer = Buffer.from(await res.arrayBuffer());
  const image = await Jimp.read(buffer);

  const w = image.bitmap.width;
  const h = image.bitmap.height;

  // We want to remove the white / near-white background.
  // Flood-fill starting from the border pixels.
  const isBg = new Uint8Array(w * h); // 1 = background, 0 = foreground
  const queue = [];

  function isWhiteLike(r, g, b) {
    // Check if pixel is close to pure white or very light grey
    return r > 235 && g > 235 && b > 235;
  }

  function getPixel(x, y) {
    const idx = (y * w + x) * 4;
    return {
      r: image.bitmap.data[idx],
      g: image.bitmap.data[idx + 1],
      b: image.bitmap.data[idx + 2],
      a: image.bitmap.data[idx + 3]
    };
  }

  // Enqueue all boundary pixels that are white-like
  for (let x = 0; x < w; x++) {
    for (const y of [0, h - 1]) {
      const p = getPixel(x, y);
      if (isWhiteLike(p.r, p.g, p.b)) {
        const idx = y * w + x;
        isBg[idx] = 1;
        queue.push([x, y]);
      }
    }
  }
  for (let y = 0; y < h; y++) {
    for (const x of [0, w - 1]) {
      const idx = y * w + x;
      if (!isBg[idx]) {
        const p = getPixel(x, y);
        if (isWhiteLike(p.r, p.g, p.b)) {
          isBg[idx] = 1;
          queue.push([x, y]);
        }
      }
    }
  }

  // BFS flood-fill
  let head = 0;
  const neighbors = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (head < queue.length) {
    const [cx, cy] = queue[head++];
    for (const [dx, dy] of neighbors) {
      const nx = cx + dx;
      const ny = cy + dy;
      if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
        const nIdx = ny * w + nx;
        if (!isBg[nIdx]) {
          const p = getPixel(nx, ny);
          if (isWhiteLike(p.r, p.g, p.b)) {
            isBg[nIdx] = 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }

  // Apply transparency to isBg pixels with soft edge feathering
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = y * w + x;
      const dataIdx = idx * 4;
      if (isBg[idx]) {
        image.bitmap.data[dataIdx + 3] = 0; // transparent
      } else {
        // Check if adjacent to background for slight feathering
        let bgNeighbors = 0;
        for (const [dx, dy] of neighbors) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
            if (isBg[ny * w + nx]) bgNeighbors++;
          }
        }
        if (bgNeighbors > 0) {
          // Check pixel lightness
          const r = image.bitmap.data[dataIdx];
          const g = image.bitmap.data[dataIdx + 1];
          const b = image.bitmap.data[dataIdx + 2];
          const brightness = (r + g + b) / 3;
          if (brightness > 220) {
            // Feather the semi-white fringe
            const alpha = Math.max(0, Math.min(255, Math.round(255 * (1 - (brightness - 220) / 35))));
            image.bitmap.data[dataIdx + 3] = alpha;
          }
        }
      }
    }
  }

  const outPath = path.join(outDir, item.name);
  await image.write(outPath);
  console.log(`Saved transparent image to ${outPath}`);
}

async function main() {
  for (const item of IMAGES) {
    await removeBackground(item);
  }
  console.log('All images processed successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
